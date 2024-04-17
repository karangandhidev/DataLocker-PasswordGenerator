import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Clipboard,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Switch,
} from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { fonts } from "./fonts";
import { css } from "./css";
import { ScrollView } from "react-native-gesture-handler";
import Slider from "@react-native-community/slider";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

function Generator() {
  const dispatch = useDispatch();
  const rerender = useSelector((state) => state.reducer.rerender);
  const preference = useSelector((state) => state.preference.preference);
  console.log(preference);
  const [isLoaded] = useFonts(fonts);
  const styles = StyleSheet.create(css);
  const [slider, setSlider] = useState(preference.length); //size of password
  const [isUpper, setUpper] = useState(preference.isUpper);
  const [isLower, setLower] = useState(preference.isLower);
  const [isNumber, setNumber] = useState(preference.isNumber);
  const [isSpecial, setSpecial] = useState(preference.isSpecial);
  const [characters, setCharacters] = useState(false);
  const [generalchar, setGeneralchar] = useState(preference.generalChar);
  const [specialchar, setSpecialchar] = useState(preference.specialChar);
  const [parenthesis, setParenthesis] = useState(preference.parenthesis);
  const [disablecolor, setDisablecolor] = useState("#f0f5f9");
  const [password, setPassword] = useState("defaultvalue");
  const [degree, setDegree] = useState("90deg");
  let passPoint = 0;
  const [passStat, setPassStat] = useState("Weak");
  const regexArr = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/];
  const PASS_LABELS = ["Too Short", "Weak", "Average", "Strong", "Secure"];
  useEffect(() => {
    if (password.length > 0 && password.length < password.MIN_LEN)
      setPassStat(PASS_LABELS[0]);
    else {
      regexArr.forEach((rgx) => (rgx.test(password) ? (passPoint += 1) : null));
      setPassStat(PASS_LABELS[passPoint]);
    }
  }, [password]);
  useEffect(() => {
    axios
      .get("http://10.0.0.2:3000/preference")
      .then((res) => dispatch({ type: "GETPREFERENCE", data: res.data }))
      .catch((e) => console.log(e));
  }, [dispatch]);
  const changeLength = (value) => {
    dispatch({ type: "CHANGEPREF", data: { key: "length", value: value } });
    setSlider(value);
  };
  const touchupper = (e) => {
    dispatch({ type: "CHANGEPREF", data: { key: "isUpper", value: !isUpper } });
    setUpper(!isUpper);
  };
  const touchlower = () => {
    dispatch({
      type: "CHANGEPREF",
      data: { key: "isLower", value: !isLower },
    });
    setLower(!isLower);
  };
  const touchnumber = () => {
    dispatch({
      type: "CHANGEPREF",
      data: { key: "isNumber", value: !isNumber },
    });
    setNumber(!isNumber);
  };
  const touchspecialchar = () => {
    dispatch({
      type: "CHANGEPREF",
      data: { key: "specialChar", value: !specialchar },
    });
    setSpecialchar(!specialchar);
  };
  const touchgeneralchar = () => {
    dispatch({
      type: "CHANGEPREF",
      data: { key: "generalChar", value: !generalchar },
    });
    setGeneralchar(!generalchar);
  };
  const touchbrackets = () => {
    dispatch({
      type: "CHANGEPREF",
      data: { key: "parenthesis", value: !parenthesis },
    });
    setParenthesis(!parenthesis);
  };
  const specialchange = () => {
    setSpecial(!isSpecial);
    if (isSpecial) {
      setDisablecolor("#333333");
    } else {
      setDisablecolor("#f0f5f9");
    }
  };

  const touchspecial = () => {
    dispatch({
      type: "CHANGEPREF",
      data: { key: "isSpecial", value: !isSpecial },
    });
    specialchange();
  };

  useEffect(() => {
    let exclude = `${!generalchar ? '!@#$%^"&*' : ""}${
      !specialchar ? '-.,"?_`~;:+=<>|/' : ""
    }${!parenthesis ? "(){}[]" : ""}`;
    dispatch({
      type: "CHANGEPREF",
      data: { key: "exclusion", value: exclude },
    });
  }, [generalchar, specialchar, parenthesis, dispatch]);

  const generatePassword = () => {
    axios
      .post("http://10.0.0.2:3000/generatepass", {
        length: preference.length,
        numbers: preference.isNumber,
        lowercase: preference.isLower,
        uppercase: preference.isUpper,
        symbols: preference.isSpecial,
        exclude: preference.exclusion,
      })
      .then((res) => {
        setPassword(res.data);
      });
  };
  useEffect(() => {
    // console.log(passStat);
    if (slider == null) {
      axios
        .post("http://10.0.0.2:3000/generatepass", {
          length: 8,
          numbers: preference.isNumber,
          lowercase: preference.isLower,
          uppercase: preference.isUpper,
          symbols: preference.isSpecial,
          exclude: preference.exclusion,
        })
        .then((res) => {
          setPassword(res.data);
        });
    }
    if (
      preference.isNumber == false &&
      preference.isLower == false &&
      preference.isUpper == false &&
      preference.isSpecial == false &&
      preference.exclusion == false
    ) {
      preference.isLower = true;
    }
    axios
      .post("http://10.0.0.2:3000/generatepass", {
        length: preference.length,
        numbers: preference.isNumber,
        lowercase: preference.isLower,
        uppercase: preference.isUpper,
        symbols: preference.isSpecial,
        exclude: preference.exclusion,
      })
      .then((res) => {
        setPassword(res.data);
      });
  }, [setPassword, preference]);
  useEffect(() => {
    if (rerender) {
      generatePassword();
      dispatch({ type: "RERENDER", data: false });
    }
  }, [rerender, dispatch, generatePassword]);
  const copyPass = () => {
    if (password === "defaultvalue") {
      alert("Please Generate a password first");
    } else {
      Clipboard.setString(password);
      showMessage({
        message: "Password Copied!",
        color: "#f0f5f9",
        backgroundColor: "#000000",
        style: {
          borderRadius: 20,
          height: 50,
        },
      });
    }
  };
  const symbolsetting = () => {
    setCharacters(!characters);
  };
  useEffect(() => {
    if (!characters) {
      setDegree("270deg");
    } else {
      setDegree("90deg");
    }
  }),
    [characters];
  if (!isSpecial && characters) {
    setCharacters(!characters);
  }
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.header2}>
        <Text style={styles.heading}>Generator</Text>
      </View>
      <TouchableOpacity
        style={styles.generatedpasswordspace}
        onPress={copyPass}
      >
        <Text style={styles.generatedpassword}>{password}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.overlaycard} onPress={generatePassword}>
        <Text style={styles.overlaytext}>Generate Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.overlaycard} onPress={copyPass}>
        <Text style={styles.overlaytext}>Copy Password</Text>
      </TouchableOpacity>
      <Slider
        style={styles.passwordslider}
        minimumValue={8}
        maximumValue={128}
        minimumTrackTintColor="#6bf060"
        maximumTrackTintColor="#F0F5F9"
        thumbTintColor="#f0f5f9"
        value={preference.length}
        step={1}
        onValueChange={(value) => changeLength(value)}
      />

      <View style={styles.generatorpreference}>
        <Text style={styles.generatorcardtext}>Password Length</Text>
        <Text style={styles.generatorcardtext}>{slider}</Text>
      </View>

      <View style={styles.generatorpreference}>
        <Text style={styles.generatorcardtext}>Password Strength</Text>
        <Text style={styles.generatorcardtext}>{passStat}</Text>
      </View>

      <TouchableOpacity
        id="isUpper"
        style={styles.generatorpreference}
        onPress={touchupper}
      >
        <Text style={styles.generatorcardtext}>Upper Case</Text>
        <Switch
          trackColor={{ false: "#f0f5f9", true: "#6bf060" }}
          thumbColor="#F0F5F9"
          onValueChange={(value) => setUpper(value)}
          value={isUpper}
          style={styles.generatorcardtext}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.generatorpreference} onPress={touchlower}>
        <Text style={styles.generatorcardtext}>Lower Case</Text>
        <Switch
          trackColor={{ false: "#f0f5f9", true: "#6bf060" }}
          thumbColor="#F0F5F9"
          // onValueChange={(value) => changeLength(value)}
          onValueChange={(value) => setLower(value)}
          value={isLower}
          style={styles.generatorcardtext}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.generatorpreference}
        onPress={touchnumber}
      >
        <Text style={styles.generatorcardtext}>Number</Text>
        <Switch
          trackColor={{ false: "#f0f5f9", true: "#6bf060" }}
          thumbColor="#F0F5F9"
          onValueChange={(value) => setNumber(value)}
          value={isNumber}
          style={styles.generatorcardtext}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.generatorpreference}
        onPress={touchspecial}
      >
        <Text style={styles.generatorcardtext}>Characters</Text>
        <Switch
          trackColor={{ false: "#f0f5f9", true: "#6bf060" }}
          thumbColor="#F0F5F9"
          onValueChange={specialchange}
          value={isSpecial}
          style={styles.generatorcardtext}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.generatorpreference}
        onPress={symbolsetting}
        disabled={!isSpecial}
      >
        <Text style={[styles.generatorcardtext, { color: disablecolor }]}>
          Special Character Preference
        </Text>

        <Icons
          name={"chevron-left"}
          size={50}
          color="#F0F5F9"
          style={[
            styles.generatorcardtext,
            { transform: [{ rotate: degree }], color: disablecolor },
          ]}
        />
      </TouchableOpacity>

      {characters ? (
        <>
          <TouchableOpacity
            style={styles.generatorpreference}
            onPress={touchgeneralchar}
          >
            <Text style={styles.generatorcardtext}>
              General Characters (!@#$%^&*)
            </Text>
            <Switch
              trackColor={{ false: "#f0f5f9", true: "#6bf060" }}
              thumbColor="#F0F5F9"
              onValueChange={(value) => setGeneralchar(value)}
              value={generalchar}
              style={styles.generatorcardtext}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.generatorpreference}
            onPress={touchspecialchar}
          >
            <Text style={styles.generatorcardtext}>
              Special Characters (-.?_`~;:+=)
            </Text>
            <Switch
              trackColor={{ false: "#f0f5f9", true: "#6bf060" }}
              thumbColor="#F0F5F9"
              onValueChange={(value) => setSpecialchar(value)}
              value={specialchar}
              style={styles.generatorcardtext}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.generatorpreference}
            onPress={touchbrackets}
          >
            <Text style={styles.generatorcardtext}>Parenthesis ((){}[])</Text>
            <Switch
              trackColor={{ false: "#f0f5f9", true: "#6bf060" }}
              thumbColor="#F0F5F9"
              onValueChange={(value) => setParenthesis(value)}
              value={parenthesis}
              style={styles.generatorcardtext}
            />
          </TouchableOpacity>
        </>
      ) : null}
      {!isUpper && !isLower && !isNumber && !isSpecial ? setLower(true) : null}
      {!generalchar && !specialchar && !parenthesis
        ? setGeneralchar(true)
        : null}
    </ScrollView>
  );
}
export default Generator;
