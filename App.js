import { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Touchable } from 'react-native';

const Stack = createNativeStackNavigator()

function HomeScreen({ navigation }) {

  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");

  const validaMatricula = (matricula) => {
    return matricula.length == 8;
    }
  const validarNomeUsuario = (nome) => {
    return nome.includes('@') || nome.includes('#') || nome.includes('$') || nome.includes('%') || nome.includes('&') || nome.includes('*');
  };
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='nome de usuario'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput style={styles.input}
        placeholder='matricula'
        value={matricula}
        onChangeText={setMatricula}
      />
      <Text>Você é Aluno?</Text>
      <View style={styles.rowContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity title="Sim" onPress={() => navigation.navigate('SimScreen')} />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacityton title="Não" onPress={() => navigation.navigate('NaoScreen')} />
        </View>
      </View>
    </View>
  );
};
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
      <Text >Você é o administrador?</Text>
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
    marginVertical: 10,
    width: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
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