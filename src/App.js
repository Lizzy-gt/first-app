import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExercicioView01 from './exercicios/exercicio_view.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
