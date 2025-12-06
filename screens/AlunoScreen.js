import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';

export default function SimScreen({ navigation }) {

  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");
  const { setUser, setUserType } = useContext(AppContext);
  
  useEffect(() => {
    setUserType('aluno');
  }, [setUserType]);
  
  const validaMatricula = (matricula) => {
    if (matricula.length != 8) {
      Alert.alert( "Erro de matrícula." ,"Matrícula inválida. Deve conter 8 caracteres.");
      return false;
    }
    if (matricula.trim().length === 0) {
      Alert.alert(" Erro de matrícula ." ,"Informe uma matrícula.");
      return false;
    }
    return true;
  }
  
  
  const validarNomeUsuario = (nome) => {
    const temCaracteresEspeciais = nome.includes('@') || nome.includes('#') || nome.includes('!');
    if (!temCaracteresEspeciais && nome.trim().lenght === 0) {
      Alert.alert("Erro de nome.","Nome de usuário inválido. Deve conter caracteres especiais.");
      return false;
    }
    return true;
  };
  function Entrar() {
    if (validarNomeUsuario(nome) && validaMatricula(matricula)) {
      setUser({nome,matricula});
      
      navigation.navigate('EntrarSaldo', { nome, matricula });
    }
  }
  
  return (
    
    <View style={styles.container}>
      <View style={styles.conter}>
      </View>
      <Text style={styles.text}>Complete os campos abaixo:</Text>

      <TextInput
        style={styles.matri}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.nome}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.entrar} onPress={Entrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  matri: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#F1DAFF',

  },
  nome: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#F1DAFF',
  },
  entrar: {
    backgroundColor: '#B862F2',
    padding: 10,
    borderRadius: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  text: {
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 26,
    marginBottom: 25,
    width: '80%',
  },
  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },


});