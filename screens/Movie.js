import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import backgroundImage from "../img/background.png";
import arrowLeft from "../img/arrow-left-icon.png";
import placeholderImage from "../img/placeholder-image.png";

export default function Movie({ navigation, route }) {
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
          <ImageBackground
            source={
              route.params.backdrop_path == null
                ? placeholderImage
                : {
                    uri: `https://image.tmdb.org/t/p/w500${route.params.backdrop_path}`,
                  }
            }
            style={styles.imageContainer}
          >
            <Text style={styles.title}>{route.params.title}</Text>
            <View style={styles.movieDetails}>
              <Text style={styles.genres}>Gatunek1, Gatunek2</Text>
              <Text style={styles.year}>
                {route.params.release_date.slice(0, 4)}
              </Text>
            </View>
          </ImageBackground>
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

  imageContainer: {
    height: 250,
    width: Dimensions.get("window").width,
    padding: 16,
    justifyContent: "flex-end",
  },

  movieDetails: {
    flexDirection: "row",
  },

  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  genres: {
    fontSize: 16,
    color: "rgba(255,255,255,0.87)",
    marginRight: 10,
    fontWeight: "500",
  },

  year: {
    color: "#808080",
    fontSize: 16,
  },
});
