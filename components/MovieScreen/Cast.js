import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import Actor from "./Actor";

export default function Cast({ cast }) {
  let limitedCast = [];
  if (cast !== undefined) limitedCast = cast.slice(0, 8);

  return (
    <View style={{ paddingHorizontal: 8 }}>
      <Text style={styles.sectionTitle}>Obsada aktorska</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.actorsContainer}>
          {cast === undefined || !cast.length ? (
            <Text style={styles.errMessage}>Brak aktorów</Text>
          ) : null}
          {limitedCast.map((actor) => {
            return (
              <Actor
                key={actor.id}
                profile_path={actor.profile_path}
                name={actor.name}
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

  actorsContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    minWidth: Dimensions.get("window").width - 16,
    minHeight: 100,
  },
  errMessage: {
    color: "rgba(255,255,255,0.87)",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "center",
    width: "100%",
  },
});
