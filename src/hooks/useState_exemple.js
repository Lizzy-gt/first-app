import { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function ContadorExemplo() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <TouchableOpacity
        onPress={() => setContador(contador + 1)}
        style={styles.button}
      >
        <Text>Clique para acresentar o valor</Text>
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#4285f4",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },

  text: {
    color: "#fff",
  },
});
