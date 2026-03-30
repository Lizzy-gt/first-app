import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ExercicioView05 from './exercicios/exercicio_view5';
// import ExercicioView06 from './exercicios/exercico_view6';
// import ExercicioView01 from './exercicios/exercicio_view.js';
// import ExercicioView02 from './exercicios/exercicio_view2.js';
// import ExercicioView03 from './exercicios/exercicio_view3.js';
// import ExercicioView04 from './exercicios/exercicio_view4.js';
import Atividade02 from '../AVALIAÇÃO/atv2';

export default function App() {
  return (
    <View style={styles.container}>
      < Atividade02 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
