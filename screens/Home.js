import {
  Dimensions,
  ImageBackground,
  Keyboard,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import SearchInput from "../components/HomeScreen/SearchInput";
import { API_KEY } from "../config";
import { useEffect, useRef, useState } from "react";
import backgroundImage from "../img/background.png";
import Loader from "../components/Loader";
import TopBar from "../components/HomeScreen/TopBar";
import MoviesContainer from "../components/HomeScreen/MoviesContainer";

export default function Home({ navigation }) {
  const [fetchUrl, setFetchUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pl-PL&sort_by=popularity.desc&include_adult=false&page=1`
  );

  const [genres, setGenres] = useState([]);
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
    const fetchedMovies = await fetch(fetchUrl);
    const jsonMovies = await fetchedMovies.json();

    if (genres.length === 0 || genres.success === false) {
      const fetchedGenres = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pl-PL`
      );
      const jsonGenres = await fetchedGenres.json();
      setGenres(jsonGenres);
    }
    scrollView.current.scrollTo({ x: 0, y: 0, animated: false });
    if (jsonMovies.success === false)
      throw new Error(jsonMovies.status_message);
    setFetchedMovies(jsonMovies.results);
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
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
        >
          <View style={styles.screenContainer}>
            {isLoading ? <Loader /> : null}
            <View style={styles.header}>
              <TopBar navigation={navigation} />
              <SearchInput setSearchedTerm={handleSetSearchedTerm} />
              <Text style={styles.title}>{headerText}</Text>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width: "100%", position: "relative" }}
              ref={scrollView}
            >
              <MoviesContainer
                navigation={navigation}
                fetchedMovies={fetchedMovies}
                genres={genres}
                errorMessage={errorMessage}
              />
            </ScrollView>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#222222",
  },
  imageBackground: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "stretch",
  },
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
    paddingBottom: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  title: {
    color: "rgba(255,255,255,0.87)",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    alignSelf: "flex-start",
    marginLeft: 8,
  },
});
