import {
  Dimensions,
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
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [fetchUrl, setFetchUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pl-PL&sort_by=popularity.desc&include_adult=true&page=1`
  );

  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [headerText, setHeaderText] = useState("Popularne dzisiaj");
  const [isLoading, setIsLoading] = useState(false);

  const scrollView = useRef(null);

  const handleSetSearchedTerm = (term) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pl-PL&query=${encodeURIComponent(
      term
    )}&page=1&include_adult=false`;
    setHeaderText(term);
    setFetchUrl(url);
  };

  const fetchMovies = async () => {
    setIsLoading(true);
    const fetchedResults = await fetch(fetchUrl);
    const jsonResults = await fetchedResults.json();
    scrollView.current.scrollTo({ x: 0, y: 0, animated: false });
    setFetchedMovies(jsonResults.results);
    setErrorMessage("");
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies().catch((e) => {
      setFetchedMovies([]);
      setErrorMessage("Coś poszło nie tak");
      setIsLoading(false);
      console.log(e.message);
    });
  }, [fetchUrl]);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.screenContainer}>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <Text style={{ color: "#FFF", fontSize: 24 }}>Ładowanie...</Text>
          </View>
        ) : null}
        <View style={styles.header}>
          <View style={styles.topBar}>
            <Image source={Logo} style={styles.logoImage} />
            <TouchableOpacity style={styles.menuIcon}>
              <Image source={menuIcon} style={{ height: "100%" }} />
            </TouchableOpacity>
          </View>
          <SearchInput setSearchedTerm={handleSetSearchedTerm} />
          <Text style={styles.title}>{headerText}</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", position: "relative" }}
          ref={scrollView}
        >
          <View style={styles.moviesContainer}>
            {errorMessage ? (
              <Text style={styles.errMessage}>{errorMessage}</Text>
            ) : null}
            {!fetchedMovies.length && !errorMessage ? (
              <Text style={styles.errMessage}>Brak wyników</Text>
            ) : null}
            {fetchedMovies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
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
    backgroundColor: "rgba(34, 34, 34, 0.95)",
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
    paddingBottom: 24,
  },

  loaderContainer: {
    position: "absolute",
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(54,54,54,0.9)",
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  errMessage: {
    color: "rgba(255,200,100,.87)",
    fontSize: 24,
    marginTop: 24,
  },
});
