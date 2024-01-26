import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "./../components/Verify/Header";
import Form from "./../components/Verify/Form";
import ToastManager from 'toastify-react-native'
import { useNavigation, useRoute } from "@react-navigation/native";

const VerifyScreen = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const navigation = useNavigation();
  const receivedData = route.params?.data;

  React.useEffect(() => {
    const fetchData = async () => {
      if (receivedData == null) {
        navigation.navigate('Login');
      }
    };
    fetchData();
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
      }}
    >
      <ToastManager  />
      <Header />
      <Form receivedData={receivedData} />
    </View>
  );
};

export default VerifyScreen;
