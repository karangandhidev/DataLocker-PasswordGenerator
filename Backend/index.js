const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { decrypt } = require("./hash");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const user = require("./users");
const address = require("./address");
const cards = require("./cards");
const bank = require("./banks");
const notes = require("./notes");
const passwords = require("./passwords");
const preference = require("./userpreference");
const generator = require("generate-password");
const secret = "afhakjfgakfg&*%^$%^afasdk";
const app = express();
const secondfactor = require("./2ndfactorauth");
const port = process.env.port || 3000;
var corsoption = {
  origin: ["http://10.0.0.3:19006", "http://localhost:19006"],
};

app.use(express.static(path.join(__dirname, "static")));
app.listen(port, () => console.log("Listening"));
app.use(bodyParser.json());
app.use(cors(corsoption));

mongoose
  .connect("mongodb://localhost:27017/onepass", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("done"));
app.use(
  user.router,
  passwords.router,
  cards.router,
  address.router,
  bank.router,
  notes.router,
  preference.router,
  secondfactor
);

app.get("/alldata", async (req, res) => {
  const token = req.header("Auth");
  if (token) {
    const verification = jwt.verify(token, secret);
    if (verification) {
      const Address = await address.model.find({});
      let Bank = await bank.bank.find({});
      let Cards = await cards.model.find({});
      let Passwords = await passwords.model.find({});
      const Notes = await notes.notes.find({});
      Bank.map((bank) => {
        bank.telephone = decrypt(bank.telephone);
        bank.ifsc = decrypt(bank.ifsc);
        bank.acc_no = decrypt(bank.acc_no);
      });
      Cards.map((card) => {
        card.number = decrypt(card.number);
        card.cvv = decrypt(card.cvv);
        card.password = decrypt(card.password);
        card.moe = decrypt(card.moe);
      });
      Passwords.map((pass) => {
        pass.username = decrypt(pass.username);
        pass.email = decrypt(pass.email);
        pass.password = decrypt(pass.password);
      });
      const data = [Address, Bank, Cards, Passwords, Notes];
      const merged = [].concat.apply([], data);
      // console.log(merged);
      res.status(200).json(merged);
    } else {
      res.status(200).json({ message: "User Unauthorized" });
    }
  } else {
    res.status(200).json({ message: "User Unauthorized" });
  }
});

app.post("/generatepass", (req, res) => {
  const { length, numbers, uppercase, lowercase, symbols, exclude } = req.body;
  let low = lowercase;
  if (!numbers && !uppercase && !lowercase && !symbols) {
    low = true;
  }
  // console.log(
  //   "length:",
  //   length,
  //   "numbers:",
  //   numbers,
  //   "uppercase:",
  //   uppercase,
  //   "lowercase:",
  //   lowercase,
  //   "symbols:",
  //   symbols,
  //   "exclude:",
  //   exclude
  // );
  let pass = generator.generate({
    length: length,
    numbers: numbers,
    uppercase: uppercase,
    lowercase: low,
    symbols: symbols,
    exclude: exclude,
    strict: true,
  });
  // console.log(pass);
  res.status(200).send(pass);
});
