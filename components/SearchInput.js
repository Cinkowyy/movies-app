import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import searchIcon from "../img/search-icon.png";

export default function SearchInput() {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Wpisz tutaj czego szukasz..."
        placeholderTextColor="#808080"
      />
      <TouchableOpacity>
        <Image source={searchIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    width: "100%",
    borderColor: "#444444",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
  },

  input: {
    color: "#FFF",
    fontSize: 16,
  },
});
