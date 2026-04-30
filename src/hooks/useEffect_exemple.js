import { use, useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert, Button } from "react-native";

export default function TelaMoeda() {
  const [moedas, setMoedas] = useState(0);
  useEffect(() => {
    if (moedas === 5) {
      Alert.alert("Sucesso, você desbloqueou o bau");
    }
  }, [moedas]);
}

return(
    <View style={StyleSheet.container}>
        <Text style={StyleSheet.texto}>Moedas coletadas: {moedas}</Text>
        <Button title="Pegar moeda" onPress={() => setMoedas(moedas + 1)} />
    </View>
)
