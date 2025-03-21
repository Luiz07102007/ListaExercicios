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
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");
  const [resultado2, setResultado2] = useState("");

  const calcular1 = (temp) => {
    const n1 = parseFloat(num1);

    if (isNaN(n1)) {
      setResultado("Entrada inválida");
      return;
    }

    switch (temp) {
      case "CpraF":
        setResultado("Resultado de celsius para fahrenheit:"+n1 * 1.8 + 32 + " °F");
        break;
      default:
    }
  };
  const calcular2 = (temp2) => {
    const n2 = parseFloat(num2);
    if (isNaN(n2)) {
      setResultado2("Entrada inválida");
      return;
    }

    switch (temp2) {
      case "FpraC":
        setResultado2("Resultado de fahrenheit para celsius:"+ (n2 - 32) / 1.8 + " °C");
        break;
      default:
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
      <Text style={styles.title}> Conversão de Temperatura</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite em Celsius para converter em Fahrenheit"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => calcular1("CpraF")}
      >
        <Text style={styles.buttonText}>Converter para Fahrenheit</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Resultado: {resultado}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite em Fahrenheit para converter em Celsius"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => calcular2("FpraC")}
      >
        <Text style={styles.buttonText}>Converter para Celsius</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado2}</Text>
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
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
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
    marginTop: 20,
  },
});
