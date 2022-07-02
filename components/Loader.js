import { Dimensions, Text, View } from "react-native";

export default function Loader() {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: Dimensions.get("window").height,
        backgroundColor: "rgba(54,54,54,0.9)",
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#FFF", fontSize: 24 }}>Ładowanie...</Text>
    </View>
  );
}
