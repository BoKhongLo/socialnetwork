import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import postSytles from "./../styles/newpostStyles";
import { Divider } from "react-native-elements";
const NewStory = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left+10,
        paddingRight: insets.right+10,
        flex: 1,
      }}>
      <Header />
      <ScrollView>
        <ChoseImg />
        <ReviewImage />
      </ScrollView>
    </View>
  )
}
const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between",height:heightPercentageToDP('8%'),alignItems:'center',borderBottomWidth:0.5}}>
      <TouchableOpacity onPress={()=> navigation.navigate('main')}>
        <Image
        style={{height:30,width:30}}
        source={require('../../assets/dummyicon/close.png')}
        />
      </TouchableOpacity>

      <Text style={{fontSize:20}}>Create Story</Text>

      <TouchableOpacity style={{backgroundColor:'grey',paddingHorizontal:13,paddingVertical:6,alignItems:'center',borderRadius:10}}>
        <Text style={{fontSize:20}}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const ChoseImg = () => {
  return (
    <View>
      <Text style={postSytles.text}>Image</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "center", flexDirection: "row" }}
        >
          <Text style={postSytles.text}>Camera</Text>
          <Image
            style={[postSytles.button, { marginLeft: 15 }]}
            source={require("../../assets/dummyicon/camera_2_line.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", flexDirection: "row" }}
        >
          <Text style={postSytles.text}>Galary</Text>
          <Image
            style={[postSytles.button, { marginLeft: 15 }]}
            source={require("../../assets/dummyicon/file_upload.png")}
          />
        </TouchableOpacity>
      </View>
      <Divider width={1} orientation="vertical" />
    </View>
  );
};

const ReviewImage = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={[postSytles.text, { marginBottom: 10 }]}>Review</Text>
      <Image
        style={[postSytles.image,{backgroundColor:'black'}]} 
        // source={} =>>>>>> thay anh vao day.
      />
    </View>
  );
};
export default NewStory