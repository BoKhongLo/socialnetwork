import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import HomeScreens from "./src/screens/HomeScreens";
import LoginScreen from "./src/screens/LoginScreen";
import ChatScreen from "./src/screens/ChatScreen";
import ProfileUser from "./src/screens/ProfileUser";
import SignupScreen from "./src/screens/SignupScreen";
import Notify from "./src/components/notification/Notify";
import EditField from "./src/components/Profile/EditField";
import LoadStories from "./src/components/Home/LoadStories";
import ChatWindows from "./src/components/Chat/ChatWindows";
import { getAllIdUserLocal, deleteDataUserLocal, updateAccessTokenAsync, getDataUserLocal } from './src/util'
import FillEmail from "./src/components/Signup/FillEmail";
import FillPassword from "./src/components/Signup/FillPassword";
import Setting from "./src/components/Profile/Setting";
import ChangePassword from "./src/components/Profile/ChangePassword";
import NewPost from "./src/screens/NewPost";
import NewStory from "./src/screens/NewStory";
import SearchScreen from "./src/screens/SearchScreen";
const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Function to check user login status
    const checkLoginStatus = async () => {
      try {
        const keys = await getAllIdUserLocal();
        // const keys = []
        if (keys.length ==  0) {
          setIsLoggedIn(false);
          return;
        }
        const dataLocal = await getDataUserLocal(keys[keys.length - 1]);
        const dataAsync = await updateAccessTokenAsync(dataLocal.id, dataLocal.refreshToken)
        
        if (dataAsync == null) {
          await deleteDataUserLocal(keys[keys.length - 1]);
          setIsLoggedIn(false);
          return
        }
        
        setIsLoggedIn(true);


      } catch (error) {
        console.error("Error checking user login status:", error);
      } finally {
        setLoading(false); // Set loading to false after checking is done
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "main" : "Login"}>
            <Stack.Screen key="main" options={{ headerShown: false }} name="main" component={HomeScreens} />
            <Stack.Screen key="chat" options={{ headerShown: false }} name="chat" component={ChatScreen} />
            <Stack.Screen key="noti" options={{ headerShown: false }} name="noti" component={Notify} />
            <Stack.Screen key="Login" options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen key="Signup" options={{ headerShown: false }} name="Signup" component={SignupScreen} />
            <Stack.Screen key="Profile" options={{ headerShown: false }} name="Profile" component={ProfileUser} />
            <Stack.Screen key="editField" options={{ headerShown: false }} name="editField" component={EditField} />
            <Stack.Screen key="loadStory" options={{headerShown: false}}  name="loadStory" component={LoadStories} />
            <Stack.Screen key="chatwindow" options={{headerShown: false}}  name="chatwindow" component={ChatWindows} />
            <Stack.Screen key="fillEmail" options={{headerShown: false}}  name="fillEmail" component={FillEmail} />
            <Stack.Screen key="fillPass" options={{headerShown: false}}  name="fillPass" component={FillPassword} />
            <Stack.Screen key="setting" options={{headerShown: false}}  name="setting" component={Setting} />
            <Stack.Screen key="changepassword" options={{headerShown: false}}  name="changepassword" component={ChangePassword} />
            <Stack.Screen key="newpost" options={{headerShown: false}}  name="newpost" component={NewPost} />
            <Stack.Screen key="newstory" options={{headerShown: false}}  name="newstory" component={NewStory} />
            <Stack.Screen key="search" options={{headerShown: false}}  name="search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});