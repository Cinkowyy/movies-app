import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Movie from "./screens/Movie";
import { Dimensions, View } from "react-native";
import Loader from "./components/Loader";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("./fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: "true",
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppLoading() {
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        position: "relative",
      }}
    >
      <Loader />
    </View>
  );
}
