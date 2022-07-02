import { StyleSheet, Text, View } from "react-native";
import MovieCard from "./MovieCard";

export default function MoviesContainer({
  fetchedMovies,
  genres,
  errorMessage,
  navigation,
}) {
  return (
    <View style={styles.moviesContainer}>
      {errorMessage ? (
        <Text style={styles.errMessage}>{errorMessage}</Text>
      ) : null}
      {!fetchedMovies.length && !errorMessage ? (
        <Text style={styles.errMessage}>Brak wyników</Text>
      ) : null}
      {fetchedMovies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            {...movie}
            navigation={navigation}
            genres={genres}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  moviesContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingBottom: 24,
  },

  errMessage: {
    color: "rgba(255,200,100,.87)",
    fontSize: 24,
    marginTop: 24,
  },
});
