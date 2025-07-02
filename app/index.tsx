import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <LinearGradient
      colors={["#000000", "#333333", "#666666"]} // Preto → Cinza escuro → Cinza médio
      style={styles.container}
    >
      <Image
        source={require("../assets/booksIcon01.png")}
        style={styles.bookIcon}
      />
      <Text style={styles.title}>Livraria Digital</Text>
      <Text style={styles.subtitle}>Descubra seu próximo livro favorito</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={["#000000", "#800080", "#4400ff"]} // Preto → Roxo → Amarelo
          style={styles.button}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <MaterialIcons
            name="menu-book"
            size={64}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Explorar Livros</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  bookIcon: {
    width: 64,
    height: 64,
    marginRight: 8,
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    elevation: 4,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  title: {
    fontSize: 24,
    color: "#ddd",
    textAlign: "center",
    fontWeight: "bold",
    elevation: 8,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
  },
  subtitle: {
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 64,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  button: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "#ddd",
    padding: 16,
    borderWidth: 2,
  },
  icon: {
    width: 64,
    height: 64,
    marginLeft: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
  },
});
