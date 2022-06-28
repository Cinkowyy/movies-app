import Home from "./screens/Home";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";

const backgroundImage = require("./img/background.png");

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <Home />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#222222",
  },

  imageBackground: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "stretch",
  },
});
