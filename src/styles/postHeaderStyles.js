import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const headerPostStyles = StyleSheet.create({
  containerHeaderPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
  },

  userName: {
    fontWeight:'600',
    marginTop: 5,
    marginLeft: 5,
  },
  frame: {
    borderWidth: 1, // Độ rộng của đường viền
    borderColor: "black", // Màu của đường viền
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 300
  },
  image: {
    resizeMode: "contain",
    alignItems: "center",
    height:400,
  },

  postFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  commentsIcon: {
    height: 30,
    width: 30,
    marginTop: 5,
    marginLeft: 10,
  },

  likes:{
    fontWeight: '600',
    marginLeft: 10
  },
  likesContainer:{
    flexDirection: 'row',
    marginTop: 4
  },

  caption:{
    fontWeight: '400',
    marginLeft: 1
  },
  captionContainer:{
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: "flex-start"
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    resizeMode: "contain",
  },
});

export default headerPostStyles;
