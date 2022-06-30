import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Logo from "../img/Logo.png";
import menuIcon from "../img/menu-icon.png";
import SearchInput from "../components/SearchInput";
import MovieCard from "../components/MovieCard";
import { API_KEY } from "../config";
import { useCallback, useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSetSearchTerm = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSubmit = () => {
    setSearchTerm("");
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <View style={styles.topBar}>
            <Image source={Logo} style={styles.logoImage} />
            <TouchableOpacity style={styles.menuIcon}>
              <Image source={menuIcon} style={{ height: "100%" }} />
            </TouchableOpacity>
          </View>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={handleSetSearchTerm}
            submit={handleSubmit}
          />
          <Text style={styles.title}>Popularne dzisiaj</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <View style={styles.moviesContainer}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
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
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  topBar: {
    width: "90%",
    position: "relative",
  },

  logoImage: {
    alignSelf: "center",
  },

  menuIcon: {
    position: "absolute",
    right: -12,
    height: 32,
  },

  title: {
    color: "rgba(255,255,255,0.87)",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  moviesContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
