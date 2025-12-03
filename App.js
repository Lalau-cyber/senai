import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './context/UserContext';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SimScreen from './screens/AlunoScreen';
import NaoScreen from './screens/AdministradorScreen';
import EntrarSaldoScreen from './screens/EntrarSaldo';
import RecarregarScreen from './screens/RecarregarScreen';
import CardapioScreen from './screens/Cardapio';
import Compras from './screens/compras'; 
import Historico from './screens/historico';
import Perfil from './screens/Perfil';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
     <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Koado">
        <Stack.Screen name="Koado" component={HomeScreen} />
        <Stack.Screen name="Aluno" component={SimScreen} />
        <Stack.Screen name="Administrador" component={NaoScreen} />
        <Stack.Screen name="EntrarSaldo" component={EntrarSaldoScreen} />
        <Stack.Screen name="Recarregar" component={RecarregarScreen} />
        <Stack.Screen name = "Cardapio" component={CardapioScreen} />
       <Stack.Screen name="historico" component={Historico} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="compras" component={Compras} />

      </Stack.Navigator>
    </NavigationContainer>
     </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});