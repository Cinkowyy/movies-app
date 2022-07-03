import { Image, StyleSheet, Text, View } from "react-native";
import actorPlaceholderImage from "../../img/actor-image-placeholder.png";

export default function Actor({ profile_path, name }) {
  return (
    <View style={styles.actorContainer}>
      <Image
        style={styles.actorImage}
        source={
          profile_path == null
            ? actorPlaceholderImage
            : {
                uri: `https://image.tmdb.org/t/p/w200${profile_path}`,
              }
        }
      />
      <View style={styles.actorDetails}>
        <Text style={styles.actorName}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actorContainer: {
    width: 160,
    paddingHorizontal: 8,
  },
  actorImage: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  actorDetails: {
    width: "100%",
    height: 60,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  actorName: {
    color: "rgba(255, 255, 255, 0.87)",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
});
