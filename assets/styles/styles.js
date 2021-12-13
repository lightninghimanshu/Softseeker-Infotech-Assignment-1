import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const window = Dimensions.get("screen");

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    marginLeft: 3,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
  },

  searchText: {
    fontFamily: "Montserrat-Semibold",
    fontSize: 14,
    marginBottom: 5,
    marginTop: 5,
    height: 40,
    padding: 10,
    shadowColor: "black",
    width: "100%",
  },

  categoriesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
    paddingHorizontal: 20,
  },

  categoriesTitle2: {
    fontFamily: "Montserrat-Regular",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingTop: 3,
  },
  categoriesListBox: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemBox: {
    backgroundColor: "#F5CA48",
    marginRight: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    width: (window.width * 30) / 100,
    height: (window.height * 15) / 100,
  },
  categoryItemImage: {
    width: (window.width * 30) / 100,
    height: (window.height * 10) / 100,
   
    borderTopRightRadius: 10,
    alignSelf: "center",
    borderTopLeftRadius: 10,
  
  },
  categoryItemTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
  },
  category2ItemTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
  },
  category2ItemText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 10,
    color: "#7a7a7a",
  },
  categorySelectBox: {
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 5,
    width: 26,
    height: 26,
    borderRadius: 26,
  },
  categorySelectIcon: {
    alignSelf: "center",
  },
});
