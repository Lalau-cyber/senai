import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.roundContainer}>
    <Text>Você é um Aluno?</Text>
    </View>
    <View style={styles.rowContainer}>
      <View style={styles.buttonWrapper}>
        <Button title="Sim" onPress={() => navigation.navigate('SimScreen')} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Não" onPress={() => navigation.navigate('NaoScreen')} />
      </View>
    </View>
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
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen name="inicio" component={HomeScreen} />
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
  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10,
  },
  buttonWrapper: {
    marginVertical:10,
    width:'12%',
    flexDirection:'row',
    alignItems: 'center',
    

  },
  roundContainer: {
    width: 150, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, 
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});