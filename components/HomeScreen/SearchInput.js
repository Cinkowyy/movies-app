import {
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import searchIconGrey from "../../img/search-icon-grey.png";
import searchIcon from "../../img/search-icon.png";
import { useMemo, useState } from "react";

export default function SearchInput({ setSearchedTerm }) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const styles = useMemo(() => {
    return StyleSheet.create({
      inputWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        width: "100%",
        borderColor: isFocused ? "rgba(255,255,255,0.87)" : "#444444",
        borderStyle: "solid",
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
        marginBottom: 12,
      },

      input: {
        color: "#FFF",
        fontSize: 16,
        fontFamily: "Poppins-Light",
        width: "80%",
      },
    });
  }, [isFocused]);

  const submit = (submittedTerm) => {
    if (!submittedTerm) {
      Keyboard.dismiss();
      return;
    }
    setSearchedTerm(submittedTerm);
    setSearchTerm("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Wpisz tutaj czego szukasz..."
        placeholderTextColor="#808080"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={searchTerm}
        onChangeText={(newTerm) => setSearchTerm(newTerm)}
        blurOnSubmit={true}
        onSubmitEditing={() => submit(searchTerm)}
      />
      <TouchableOpacity onPress={() => submit(searchTerm)}>
        <Image source={isFocused ? searchIcon : searchIconGrey} />
      </TouchableOpacity>
    </View>
  );
}
