import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './AppContext';
import { StyleSheet } from 'react-native';
import HomeScreen from './sccreens/HomeScreen';
import SimScreen from './sccreens/AlunoScreen';
import NaoScreen from './sccreens/AdministradorScreen';
import EntrarSaldo from './sccreens/EntrarSaldo';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
     <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Koado">
        <Stack.Screen name="Koado" component={HomeScreen} />
        <Stack.Screen name="Aluno" component={SimScreen} />
        <Stack.Screen name="Administrador" component={NaoScreen} />
        <Stack.Screen name="EntrarSaldo" component={EntrarSaldo} />
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