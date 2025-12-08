import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeProvider, ThemeContext } from './context/TemaContext';
import { AppProvider } from './context/UserContext';

// telas
import Koado from './screens/HomeScreen';
import SimScreen from './screens/AlunoScreen';
import NaoScreen from './screens/AdministradorScreen';
import EntrarSaldoScreen from './screens/EntrarSaldo';
import RecarregarScreen from './screens/RecarregarScreen';
import CardapioScreen from './screens/Cardapio';
import Compras from './screens/Compras';
import Historico from './screens/Historico';
import Perfil from './screens/Perfil';
import Gestao from './screens/Gestao';
import HistoricoAdm from './screens/HistoricoAdm';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Koado">
        <Stack.Screen name="Koado" component={Koado} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Aluno" component={SimScreen} />
        <Stack.Screen name="Administrador" component={NaoScreen} />
        <Stack.Screen name="EntrarSaldo" component={EntrarSaldoScreen} />
        <Stack.Screen name="Recarregar" component={RecarregarScreen} />
        <Stack.Screen name="Cardapio" component={CardapioScreen} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Compras" component={Compras} />
        <Stack.Screen name="Gestao" component={Gestao} />
        <Stack.Screen name="HistoricoAluno" component={HistoricoAdm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </ThemeProvider>
  );
}
