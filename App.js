import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './context/UserContext';
import { StyleSheet } from 'react-native';
import HomeScreen from './sccreens/HomeScreen';
import SimScreen from './sccreens/AlunoScreen';
import NaoScreen from './sccreens/AdministradorScreen';
import EntrarSaldoScreen from './sccreens/EntrarSaldo';
import RecarregarScreen from './sccreens/RecarregarScreen';
import CardapioScreen from './sccreens/Cardapio';
import Perfil from './sccreens/perfil';
import Compras from './sccreens/compras'; 
import Historico from './sccreens/historico';

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
        <Stack.Screen name="perfil" component={Perfil} />
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