import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './context/UserContext';
import { StyleSheet } from 'react-native';
import HomeScreen from './sccreens/HomeScreen';
import SimScreen from './sccreens/AlunoScreen';
import NaoScreen from './sccreens/AdministradorScreen';
import EntrarSaldoScreen from './sccreens/EntrarSaldo';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
     <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen name="inicio" component={HomeScreen} />
        <Stack.Screen name="SimScreen" component={SimScreen} />
        <Stack.Screen name="NaoScreen" component={NaoScreen} />
        <Stack.Screen name="EntrarSaldo" component={EntrarSaldoScreen} />
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