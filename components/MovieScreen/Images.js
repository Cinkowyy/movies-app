import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Images({ images }) {
  let limitedImages = [];
  if (images !== undefined) limitedImages = images.slice(2, 8);
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <Text style={styles.sectionTitle}>Zdjęcia</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.imagesContainer}>
          {images === undefined || images.length < 3 ? (
            <Text style={styles.errMessage}>Brak zdjęć</Text>
          ) : null}
          {limitedImages.map((image, index) => {
            return (
              <Image
                style={styles.image}
                key={index}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${image.file_path}`,
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    color: "rgba(255,255,255,0.87)",
    fontFamily: "Poppins-Medium",
    paddingLeft: 8,
  },

  imagesContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    minWidth: Dimensions.get("window").width - 16,
    minHeight: 100,
  },

  image: {
    height: 200,
    width: 270,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  errMessage: {
    color: "rgba(255,255,255,0.87)",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "center",
    width: "100%",
  },
});
