import { StyleSheet, Text, View } from "react-native";

export default function Overview({ overview }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Opis filmu</Text>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewText}>
          {!overview.length ? "Brak opisu" : overview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    color: "rgba(255,255,255,0.87)",
    fontFamily: "Poppins-Medium",
  },
  overviewContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 24,
    borderRadius: 8,
    marginVertical: 16,
  },

  overviewText: {
    color: "rgba(255,255,255,0.87)",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Poppins-Regular",
  },
});
