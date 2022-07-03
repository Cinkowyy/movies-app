import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import placeholderImage from "../../img/placeholder-image.png";

export default function MovieCard(props) {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => props.navigation.push("Movie", { ...props })}
      >
        <Image
          style={styles.image}
          source={
            props.backdrop_path == null
              ? placeholderImage
              : {
                  uri: `https://image.tmdb.org/t/p/w500${props.backdrop_path}`,
                }
          }
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.release_date.slice(0, 4)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    marginBottom: 24,
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 250,
    maxWidth: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  detailsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    maxWidth: "70%",
    color: "#FFF",
    marginRight: 16,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  year: {
    color: "#808080",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});
