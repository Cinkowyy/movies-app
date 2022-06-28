import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Logo from "../img/Logo.png";
import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logoImage} />
        <SearchInput />
        <Text style={styles.title}>Popularne dzisiaj</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(34, 34, 34, 0.9)",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  logoImage: {
    width: "50%",
  },

  title: {
    color: "rgba(255,255,255,0.87)",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "flex-start",
    marginLeft: 8,
  },
});
