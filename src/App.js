import { StyleSheet, View } from 'react-native';
import Recados from './hooks/atv';

export default function App() {
  return (
    <View style={styles.container}>
      <Recados />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})