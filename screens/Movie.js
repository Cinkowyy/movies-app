import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  LogBox,
  ScrollView,
} from "react-native";
import backgroundImage from "../img/background.png";
import arrowLeft from "../img/arrow-left-icon.png";
import Details from "../components/MovieScreen/Details";
import Overview from "../components/MovieScreen/Overview";
import menuIcon from "../img/menu-icon.png";
import Cast from "../components/MovieScreen/Cast";
import { API_KEY } from "../config";
import { useEffect, useState } from "react";
import Images from "../components/MovieScreen/Images";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function Movie({
  navigation,
  route: {
    params: {
      id,
      title,
      backdrop_path,
      release_date,
      genre_ids,
      genres: { genres },
      overview,
    },
  },
}) {
  const findGenreNames = () => {
    const foundGenres = [];

    if (!genre_ids.length || genres === undefined) {
      foundGenres.push("Brak gatunków");
      return foundGenres;
    }

    for (let i = 0; i < genre_ids.length; i++) {
      foundGenres.push(
        genres.find((genre) => {
          return genre.id === genre_ids[i];
        }).name
      );
    }

    return foundGenres;
  };

  const [cast, setCast] = useState([]);
  const [images, setImages] = useState([]);

  const fetchCast = async () => {
    const fetchedCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=pl-PL`
    );
    const jsonCast = await fetchedCast.json();
    setCast(jsonCast.cast);
  };

  const fetchImages = async () => {
    const fetchedImages = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`
    );
    const jsonImages = await fetchedImages.json();
    setImages(jsonImages.backdrops);
  };

  useEffect(() => {
    fetchCast().catch((e) => {
      console.log(e.message);
    });

    fetchImages().catch((e) => {
      console.log(e.message);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <View style={styles.screenContainer}>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => navigation.goBack()}
          >
            <Image style={{ height: 32, width: 32 }} source={arrowLeft} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}>
            <Image source={menuIcon} style={{ height: 32, width: 32 }} />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Details
              title={title}
              backdrop_path={backdrop_path}
              release_year={release_date.slice(0, 4).toString()}
              genres={findGenreNames()}
            />
            <Overview overview={overview} />
            <Cast cast={cast} />
            <Images images={images} />
          </ScrollView>
        </View>
      </ImageBackground>
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
    position: "relative",
    paddingBottom: 32,
  },

  leftIcon: {
    position: "absolute",
    top: 32,
    left: 16,
    zIndex: 2,
  },
  menuIcon: {
    position: "absolute",
    right: 16,
    top: 32,
    height: 32,
    width: 32,
    zIndex: 2,
  },
});
