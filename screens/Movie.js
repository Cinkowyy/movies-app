import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  LogBox,
} from "react-native";
import backgroundImage from "../img/background.png";
import arrowLeft from "../img/arrow-left-icon.png";
import Details from "../components/MovieScreen/Details";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function Movie({
  navigation,
  route: {
    params: {
      id,
      title,
      backdrop_path,
      release_date,
      genre_ids,
      genres,
      overview,
    },
  },
}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}
          >
            <Image style={{ height: 32, width: 32 }} source={arrowLeft} />
          </TouchableOpacity>
          <Details
            title={title}
            backdrop_path={backdrop_path}
            release_year={release_date.slice(0, 4).toString()}
            genres={["Akcja, Przygoda"]}
          />
        </View>
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
  screenContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    position: "relative",
  },

  leftIcon: {
    position: "absolute",
    top: 32,
    left: 16,
    zIndex: 2,
  },
});
