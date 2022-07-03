import placeholderImage from "../../img/placeholder-image.png";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Details({
  backdrop_path,
  title,
  genres,
  release_year,
}) {
  return (
    <ImageBackground
      source={
        backdrop_path == null
          ? placeholderImage
          : {
              uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            }
      }
      style={styles.imageContainer}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.movieDetails}>
        <Text style={styles.genres}>
          {genres.length === 1 ? genres[0] : `${genres[0]}, ${genres[1]}`}
        </Text>
        <Text style={styles.year}>{release_year}</Text>
      </View>
      <LinearGradient
        colors={[
          "rgba(0,0,0,1)",
          "rgba(0,0,0,.4)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(34, 34, 34,0.5)",
          "rgba(34, 34, 34,1)",
        ]}
        style={styles.gradient}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
    width: Dimensions.get("window").width,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    position: "relative",
  },

  movieDetails: {
    flexDirection: "row",
    zIndex: 2,
    marginBottom: 16,
  },

  title: {
    color: "#FFF",
    fontSize: 24,
    zIndex: 2,
    fontFamily: "Poppins-Bold",
    lineHeight: 36,
  },
  genres: {
    fontSize: 16,
    color: "rgba(255,255,255,0.87)",
    marginRight: 10,
    fontFamily: "Poppins-Regular",
  },

  year: {
    color: "#808080",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },

  gradient: {
    width: Dimensions.get("window").width,
    height: "100%",
    position: "absolute",
  },
});
