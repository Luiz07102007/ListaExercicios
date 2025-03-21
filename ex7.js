import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [resultado, setResultado] = useState("");
  const calcular = (vm) => {
    const n1 = parseFloat(num1);

    if (isNaN(n1)) {
      setResultado("Entrada inválida");
      return;
    }

    switch (vm) {
      case "conta":
        setResultado("Resultado da área do círculo é :" +Math.PI * (n1 * n1));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-UBos782-oUg_4Ps3MqFvo5yqHwslXFwCA&s",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Calculadora área do círculo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do raio do círculo"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
     
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => calcular("conta")}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 186,
    height: 271,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    width: "80%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
});
