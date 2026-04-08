import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcon from "@expo/vector-icons/MaterialIcons"

export default function Index() {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <Image source={require("../assets/images/logo.png")}/>
      <Image source={require("../assets/images/weather.png")}/>

      <Text style={styles.tittle}>Boas-vindas!</Text>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTittle}>Entrar</Text>
      <MaterialIcon name="arrow-forward" size={24} color={"#01080E"}/>
    </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
    paddingVertical: 79,
    paddingHorizontal: 32,
  },
  tittle: {
    fontSize: 25,
    color: "#FFF",
    fontFamily: "MontSerrat_400Regular"
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#7693FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    flexDirection: "row",
    gap: 8,
  },
  buttonTittle: {
    color: "#01080E",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "MontSerrat_600SemiBold"
  }
})