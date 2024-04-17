import { Dimensions } from "react-native";
const deviceWindow = Dimensions.get("window");
export const css = {
  // LOGIN
  scroll: {
    backgroundColor: "#000000",
    width: deviceWindow.width,
    // height: deviceWindow.height,
    elevation: 0,
  },
  background: {
    backgroundColor: "#000000",
    width: deviceWindow.width,
    alignItems: "center",
    height: deviceWindow.height,
    elevation: 1,
  },
  loginheader: {
    marginTop: deviceWindow.height * 0.1,
    color: "#F0F5F9",
    fontFamily: "RobotoCondensed-Light",
    fontSize: 50,
    alignItems: "center",
  },
  slogan: {
    color: "#F0F5F9",
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    textAlign: "center",
    width: deviceWindow.width,
    marginTop: deviceWindow.height * 0.01,
    marginBottom: deviceWindow.height * 0.01,
  },
  username: {
    color: "#F0F5F9",
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    textAlign: "center",
    width: deviceWindow.width,
    marginTop: deviceWindow.height * 0.05,
    marginBottom: deviceWindow.height * 0.05,
  },
  bodytext: {
    color: "#F0F5F9",
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    textAlign: "left",
    width: deviceWindow.width * 0.66,
    marginTop: deviceWindow.height * 0.01,
  },
  passwordinputbox: {
    fontFamily: "RobotoCondensed-Light",
    borderColor: "#F0F5F9",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 15,
    textAlign: "center",
    fontSize: 20,
    height: 40,
    color: "#F0F5F9",
    width: deviceWindow.width * 0.69,
  },
  hinttoggle: {
    marginTop: deviceWindow.height * 0.03,
    marginBottom: deviceWindow.height * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    width: deviceWindow.width * 0.66,
    alignItems: "center",
  },
  hinttext: {
    color: "#F0F5F9",
    fontFamily: "RobotoCondensed-Light",
    fontSize: 23,
  },
  empty: {
    height: deviceWindow.height * 0.12,
  },
  hint: {
    color: "#F0F5F9",
    fontFamily: "RobotoCondensed-Light",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#F0F5F9",
    maxHeight: deviceWindow.height * 0.12,
    maxWidth: deviceWindow.width * 0.69,
    width: deviceWindow.width * 0.69,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    fontFamily: "RobotoCondensed-Light",
    borderColor: "#F0F5F9",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "center",
    width: deviceWindow.width * 0.3,
    height: deviceWindow.height * 0.05,
    justifyContent: "center",
    color: "#F0F5F9",
    marginBottom: deviceWindow.height * 0.05,
    marginTop: deviceWindow.height * 0.02,
  },
  loginbuttontext: {
    fontSize: 23,
    alignItems: "center",
    fontFamily: "RobotoCondensed-Light",
    borderColor: "#F0F5F9",
    textAlign: "center",
    color: "#F0F5F9",
  },

  // REGISTER
  passmeter: {
    width: deviceWindow.width * 0.69,
    height: deviceWindow.height * 0.04,
    borderRadius: 15,
  },
  form: {
    textAlign: "center",
  },

  // GENERATOR
  header2: {
    backgroundColor: "#1E2022",
    width: deviceWindow.width,
    height: deviceWindow.height * 0.12,
    elevation: 2,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 50,
    color: "#F0F5F9",
  },
  generatedpasswordspace: {
    width: deviceWindow.width,
    maxWidth: deviceWindow.width,
    color: "#F0F5F9",
    backgroundColor: "#000000",
    elevation: 2,
    paddingRight: deviceWindow.width * 0.05,
    paddingLeft: deviceWindow.width * 0.05,
    paddingBottom: deviceWindow.width * 0.03,
    paddingTop: deviceWindow.width * 0.03,
  },
  generatedpassword: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 28,
    color: "#F0F5F9",
  },
  overlaycard: {
    width: deviceWindow.width,
    height: deviceWindow.height * 0.06,
    backgroundColor: "#1E2022",
    alignItems: "center",
    // elevation: 6,
    justifyContent: "center",
  },
  overlaytext: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 32,
    color: "#F0F5F9",
  },
  passwordslider: {
    backgroundColor: "#1e2022",
    maxWidth: deviceWindow.width,
    width: deviceWindow.width,
    height: deviceWindow.height * 0.08,
    paddingRight: deviceWindow.width * 0.05,
    paddingLeft: deviceWindow.width * 0.05,
    alignItems: "center",
  },
  generatorpreference: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    width: deviceWindow.width,
    backgroundColor: "#1e2022",
    justifyContent: "space-between",
    paddingLeft: deviceWindow.width * 0.02,
    paddingRight: deviceWindow.width * 0.02,
    height: deviceWindow.height * 0.08,
  },
  generatorcardtext: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 28,
    // elevation: 1,

    color: "#f0f5f9",
  },

  // PROFILE
  screenview: {
    alignItems: "center",
    // elevation: 5,
    height: deviceWindow.height * 1.1,
    maxHeight: deviceWindow.height * 2,
    backgroundColor: "#000000",
  },
  profilecardview: {
    marginTop: deviceWindow.height * 0.02,
    backgroundColor: "#1E2022",
    borderRadius: 15,
  },
  profilecard: {
    borderRadius: 15,
    paddingLeft: deviceWindow.width * 0.03,
    paddingRight: deviceWindow.width * 0.03,
    width: deviceWindow.width * 0.97,
    height: deviceWindow.height * 0.08,
    maxHeight: deviceWindow.height * 0.08,
    backgroundColor: "#1E2022",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datacardtext: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 28,
    color: "#F0F5F9",
  },
  profilesubcard: {
    width: deviceWindow.width * 0.97,
    height: deviceWindow.height * 0.08,
    paddingLeft: deviceWindow.width * 0.03,
    alignItems: "center",
    paddingRight: deviceWindow.width * 0.03,
    backgroundColor: "#1E2022",
    paddingTop: deviceWindow.height * 0.022,
    marginTop: deviceWindow.height * -0.02,
    maxHeight: deviceWindow.height * 0.08,
    borderRadius: 15,
  },

  // HOMEPAGE
  fakeheading: {
    flex: 2,
    textAlign: "right",
    paddingRight: deviceWindow.width * 0.167,
    elevation: 0,
    backgroundColor: "#1E2022",
  },
  header: {
    backgroundColor: "#1E2022",
    width: deviceWindow.width,
    height: deviceWindow.height * 0.12,
    flexDirection: "row",
    elevation: 2,
    position: "relative",
  },
  addbutton: {
    flex: 1,
    alignItems: "center",
    marginRight: deviceWindow.width * 0.06,
    marginTop: deviceWindow.height * 0.03,
    justifyContent: "center",
    backgroundColor: "#F0F5F9",
    height: deviceWindow.height * 0.06,
    maxWidth: deviceWindow.height * 0.06,
    borderRadius: 15,
    borderWidth: 0.5,
  },
  addbuttontext: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 23,
    color: "#1E2022",
  },
  overlay: {
    alignItems: "center",
    backgroundColor: "#1E2022",
    width: deviceWindow.width,
  },
  textheading: {
    position: "absolute",
    elevation: 4,
    marginTop: deviceWindow.height * 0.02,
  },
  datacard: {
    borderRadius: 15,
    borderWidth: 0.75,
    paddingLeft: deviceWindow.width * 0.03,
    paddingRight: deviceWindow.width * 0.03,
    width: deviceWindow.width * 0.94,
    height: deviceWindow.height * 0.08,
    maxHeight: deviceWindow.height * 0.08,
    margin: "3%",
    backgroundColor: "#1E2022",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 4 },
    elevation: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  canceloverlaybutton: {
    backgroundColor: "#F0F5F9",
    color: "#1E2022",
    marginTop: deviceWindow.height * 0.02,
    marginBottom: deviceWindow.height * 0.02,
    height: deviceWindow.height * 0.05,
    maxWidth: deviceWindow.height * 0.05,
    borderRadius: 15,
    borderWidth: 0.5,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 4 },
  },

  // CATEGORIES

  view_headerbg: {
    backgroundColor: "#5970ce",
    width: deviceWindow.width,
    height: deviceWindow.height * 0.12,
    elevation: 2,
    position: "relative",
  },
  view_headingview: {
    position: "absolute",
    marginTop: deviceWindow.height * 0.02,
    // width: deviceWindow.width,
    elevation: 4,
  },
  view_headingtext: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 50,
    color: "#F0FFFF",
    flex: 1,
  },
  view_actualheading: {
    position: "absolute",
    elevation: 3,
    flex: 1,
    flexDirection: "row",
    height: deviceWindow.height * 0.12,
    width: deviceWindow.width,
    justifyContent: "space-between",
  },
  editbackicon: {
    flex: 1,
    paddingTop: deviceWindow.height * 0.025,
    maxWidth: deviceWindow.width * 0.2,
    marginRight: deviceWindow.width * 0.2,
    paddingLeft: deviceWindow.width * 0.04,
  },
  searchicon: {
    flex: 1,
    paddingTop: deviceWindow.height * 0.028,
    marginLeft: deviceWindow.width * 0.2,
    maxWidth: deviceWindow.width * 0.2,
    paddingLeft: deviceWindow.width * 0.04,
  },
  searchcancel: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    marginBottom: deviceWindow.height * 0.01,
    marginLeft: deviceWindow.width * 0.02,
  },
  searchbar: {
    backgroundColor: "#F8F8FF",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: deviceWindow.width * 0.02,
    marginTop: deviceWindow.height * 0.02,
    width: deviceWindow.width * 0.8,
    maxWidth: deviceWindow.width * 0.78,
    height: deviceWindow.height * 0.07,
    maxHeight: deviceWindow.height * 0.07,
    fontFamily: "RobotoCondensed-Light",
    fontSize: 23,
  },
  cancelsearchicon: {
    flex: 1,
    paddingTop: deviceWindow.height * 0.028,
    maxWidth: deviceWindow.width * 0.2,
    paddingLeft: deviceWindow.width * 0.04,
  },
  nodata: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    color: "#F0F5F9",
    textAlign: "center",
    width: deviceWindow.width,
    marginTop: deviceWindow.height * 0.4,
  },

  // INPUT FORMS
  formheadingview: {
    position: "absolute",
    marginTop: deviceWindow.height * 0.02,
    // width: deviceWindow.width,
    elevation: 4,
  },
  formheading: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 50,
    color: "#F0FFFF",
    flex: 1,
  },
  formview: {
    alignItems: "flex-start",
    // maxHeight: deviceWindow.height * 2,
    paddingLeft: deviceWindow.width * 0.04,
    width: deviceWindow.width,
    backgroundColor: "#000000",
  },
  fieldname: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 28,
    marginLeft: deviceWindow.width * 0.03,
    color: "#F0F5F9",
  },
  fieldinput: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    color: "#F0F5F9",
    width: deviceWindow.width * 0.92,
    maxWidth: deviceWindow.width * 0.92,
    height: deviceWindow.height * 0.05,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#F0F5F9",
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: deviceWindow.width * 0.04,
    marginBottom: deviceWindow.height * 0.02,
  },

  formsubmitview: {
    maxWidth: deviceWindow.width,
    width: deviceWindow.width,
    alignItems: "center",
    elevation: 5,
    // paddingRight: deviceWindow.width * 0.04,
  },
  submitdata: {
    // flex: 1,
    alignItems: "center",
    // textAlign: "center",
    backgroundColor: "#f0f5f9",
    justifyContent: "center",
    height: deviceWindow.height * 0.06,
    maxHeight: deviceWindow.height * 0.06,
    width: deviceWindow.width * 0.25,
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: "white",
    marginTop: deviceWindow.height * 0.04,
    marginBottom: deviceWindow.height * 0.2,
  },
  submitdatatext: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    color: "#000000",
  },
  generateinform: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: deviceWindow.width * 0.03,
    width: deviceWindow.width * 0.89,
    maxWidth: deviceWindow.width * 0.92,
  },
  generatename: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 28,
    color: "#F0F5F9",
  },
  moeform: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // marginLeft: deviceWindow.width * 0.03,
    width: deviceWindow.width * 0.89,
    maxWidth: deviceWindow.width * 0.92,
  },
  moeinput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#F0F5F9",
    width: deviceWindow.width * 0.2,
    maxWidth: deviceWindow.width * 0.2,
    height: deviceWindow.height * 0.05,
    maxHeight: deviceWindow.height * 0.1,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    color: "#f0f5f9",
    marginBottom: deviceWindow.height * 0.02,
  },
  moename: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 35,
    color: "#f0f5f9",
    marginLeft: "2%",
    marginRight: "2%",
  },
  noteinput: {
    marginRight: deviceWindow.width * 0.04,
    marginBottom: deviceWindow.height * 0.02,
    borderWidth: 1,
    width: deviceWindow.width * 0.92,
    maxWidth: deviceWindow.width * 0.92,
    textAlignVertical: "top",
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    color: "#F0F5F9",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#F0F5F9",
  },

  editbutton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6bf060",
    top: 43,
    bottom: 20,
    right: 15,
    justifyContent: "center",
    height: deviceWindow.height * 0.04,
    maxWidth: deviceWindow.width * 0.2,
    borderRadius: 15,
    borderWidth: 0.5,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 4 },
  },
  editbuttontext: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    color: "#F0FFFF",
  },

  //POPUP CONFIRMATION

  popupbox: {
    borderWidth: 2,
    backgroundColor: "#1E2022",
    borderRadius: 15,
    borderColor: "#E4252D",
    width: deviceWindow.width * 0.8,
    height: deviceWindow.height * 0.32,
    top: deviceWindow.height * 0.22,
    left: deviceWindow.width * 0.1,
    elevation: 10,
    position: "absolute",
    borderWidth: 1,
  },

  popuptitle: {
    fontFamily: "RobotoCondensed-Light",
    flex: 1,
    fontSize: 30,
    textAlign: "center",
    color: "#F0F5F9",
    marginTop: deviceWindow.height * 0.01,
    justifyContent: "center",
  },
  popupcontent: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    color: "#F0F5F9",
    marginTop: deviceWindow.height * 0.02,
  },
  popupbuttoncontent: {
    fontSize: 25,
    alignItems: "center",
    fontFamily: "RobotoCondensed-Light",
    borderColor: "#F0F5F9",
    textAlign: "center",
    color: "#F0F5F9",
  },
  popupRightbutton: {
    fontFamily: "RobotoCondensed-Light",
    borderColor: "#F0F5F9",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "center",
    width: deviceWindow.width * 0.3,
    height: deviceWindow.height * 0.05,
    justifyContent: "center",
    color: "#F0F5F9",
    marginBottom: deviceWindow.height * 0.05,
    marginTop: deviceWindow.height * 0.025,
    marginLeft: deviceWindow.width * 0.25,
  },
  credentialsinput: {
    marginLeft: deviceWindow.width * 0.02,
    marginRight: deviceWindow.width * 0.02,
    marginTop: deviceWindow.height * 0.02,
    width: deviceWindow.width * 0.75,
    maxWidth: deviceWindow.width * 0.75,
    height: deviceWindow.height * 0.05,
    maxHeight: deviceWindow.height * 0.05,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: "RobotoCondensed-Light",
    color: "#f0f5f9",
    fontSize: 23,
    borderColor: "#F0F5F9",
    borderWidth: 1,
    borderRadius: 10,
  },
  closebutton: {
    justifyContent: "center",
    padding: deviceWindow.height * 0.01,
  },
  popupheader: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },

  // VIEW AND EDIT FORMS
  cancelediticon: {
    flex: 1,
    paddingTop: deviceWindow.height * 0.032,
    maxWidth: deviceWindow.width * 0.2,
    marginRight: deviceWindow.width * 0.2,
    paddingLeft: deviceWindow.width * 0.04,
  },
  deletedataicon: {
    flex: 1,
    alignItems: "center",
    marginRight: deviceWindow.width * 0.04,
    marginTop: deviceWindow.height * 0.032,
    justifyContent: "center",
    height: deviceWindow.height * 0.06,
    maxWidth: deviceWindow.height * 0.06,
  },
  editpopupbox: {
    borderWidth: 2,
    backgroundColor: "#1E2022",
    borderRadius: 15,
    borderColor: "#E4252D",
    width: deviceWindow.width * 0.8,
    height: deviceWindow.height * 0.22,
    top: deviceWindow.height * 0.22,
    left: deviceWindow.width * 0.1,
    elevation: 10,
    position: "absolute",
    borderWidth: 1,
  },
  editpopuptitle: {
    fontFamily: "RobotoCondensed-Light",
    flex: 1,
    fontSize: 30,
    textAlign: "center",
    color: "#F0F5F9",
    marginTop: deviceWindow.height * 0.01,
    justifyContent: "center",
  },
  editpopupcontent: {
    fontFamily: "RobotoCondensed-Light",
    fontSize: 25,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    color: "#F0F5F9",
    marginTop: deviceWindow.height * 0.02,
  },
  editpopupbuttoncontent: {
    fontSize: 25,
    alignItems: "center",
    fontFamily: "RobotoCondensed-Light",
    borderColor: "#F0F5F9",
    textAlign: "center",
    color: "#F0F5F9",
  },
  editpopupRightbutton: {
    fontFamily: "RobotoCondensed-Light",
    borderColor: "#F0F5F9",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "center",
    width: deviceWindow.width * 0.3,
    height: deviceWindow.height * 0.05,
    justifyContent: "center",
    color: "#F0F5F9",
    marginBottom: deviceWindow.height * 0.05,
    marginTop: deviceWindow.height * 0.025,
    marginLeft: deviceWindow.width * 0.25,
  },
  editclosebutton: {
    justifyContent: "center",
    padding: deviceWindow.height * 0.01,
  },
  editpopupheader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // EDIT SETTINGS
  questioncard: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#1e2022",
    marginTop: deviceWindow.height * 0.02,
    alignItems: "flex-start",
    paddingLeft: deviceWindow.width * 0.03,
    width: deviceWindow.width * 0.98,
    marginLeft: deviceWindow.width * 0.1,
    marginRight: deviceWindow.width * 0.1,
  },
};
