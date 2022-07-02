import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Logo from "../../img/Logo.png";
import menuIcon from "../../img/menu-icon.png";

export default function TopBar({ navigation }) {
  return (
    <View style={styles.topBar}>
      <Image source={Logo} style={styles.logoImage} />
      <TouchableOpacity style={styles.menuIcon}>
        <Image source={menuIcon} style={{ height: "100%" }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "90%",
    position: "relative",
  },

  logoImage: {
    alignSelf: "center",
  },

  menuIcon: {
    position: "absolute",
    right: -20,
    height: 32,
    width: 32,
  },
});
