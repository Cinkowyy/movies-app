import placeholderImage from "../../img/placeholder-image.png";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
        <Text style={styles.genres}>Gatunek1, Gatunek2</Text>
        <Text style={styles.year}>{release_year}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
