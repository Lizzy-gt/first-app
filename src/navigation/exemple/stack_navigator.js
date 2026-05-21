import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetalheScreen from "../screens/DetalheScreen";
import ConfigScreen from "../screens/ConfigScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhe" component={DetalheScreen} />
      <Stack.Screen name="Config" component={ConfigScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
    </Stack.Navigator>
  );
}
