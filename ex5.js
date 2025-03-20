import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");
  const calcEc = (massa, velocidade) => {
    return 0.5 * massa * Math.pow(velocidade, 2);
  };

  const handlecine = () => {
    const sum = calcEc(parseFloat(num1), parseFloat(num2));
    setResultado(`Soma: ${sum} Ec`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-UBos782-oUg_4Ps3MqFvo5yqHwslXFwCA&s",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Cálculo da Energia Cinética</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor da massa"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o valor da velocidade"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlecine}>
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
