import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Você é Aluno?</Text>
      <Button title="Sim" onPress={() => navigation.navigate('SimScreen')} />
      <Button title="Não" onPress={() => navigation.navigate('NaoScreen')} />
    </View>
  );
}

function SimScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo, Aluno!</Text>
    </View>
  );
}

function NaoScreen() {
  return (
    <View style={styles.container}>
      <Text>Você é o administrador?</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SimScreen" component={SimScreen} />
        <Stack.Screen name="NaoScreen" component={NaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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