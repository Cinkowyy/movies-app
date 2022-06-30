import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function SearchInput() {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://image.tmdb.org/t/p/w500/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
          }}
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          Fantastyczne zwierzęta: Tajemnice Dumbledore'a
        </Text>
        <Text style={styles.year}>2022</Text>
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
  },
  year: {
    color: "#808080",
    fontSize: 16,
  },
});
