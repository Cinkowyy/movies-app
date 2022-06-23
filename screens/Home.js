import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Home screen!</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    color: "#FFF",
  },
});
