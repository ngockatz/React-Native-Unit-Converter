import { StyleSheet } from "react-native";
export default StyleSheet.create({
  headerContainer: {
    paddingBottom: 10,
    //backgroundColor: '#e82813',
    alignSelf: "stretch"
  },
  headerText: {
    color: "white",
    fontSize: 20
  },

  contentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  },

  inputContainer: {
    flex: 2,
    justifyContent: "space-between"
  },

  resultText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 20
  },
  inputTextStyle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    backgroundColor:'green'
  },
  pickerStyle: {
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor:'blue'
  }
});
