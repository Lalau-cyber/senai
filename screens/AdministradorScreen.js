
import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';


export default function NaoScreen({ navigation }) {

  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const { userType, setUserType } = useContext(AppContext);
  useEffect(() => {
    setUserType('administrador');
  }, []);

  const validaSenha = (senha) => {
    if (senha.length !== 4) {
      Alert.alert("Erro de Senha" ,"Senha inválida. Deve conter 4 caracteres.");
      return false;
    }
    return true;
  };

  const validarNomeUsuario = (nome) => {
    if (!nome.trim()) {
      Alert.alert("Erro de Nome" ,"informe um nome válido");
      return false;
    }
    const temCaracteresEspeciais = nome.includes('@') || nome.includes('#') || nome.includes('$') || nome.includes('%') || nome.includes('&') || nome.includes('*') || nome.includes('!');
    if (!temCaracteresEspeciais) {
      Alert.alert("Erro de Nome" ,"Nome de usuário inválido. Deve conter caracteres especiais.");
      return false;
    };
    return true;
  };
  function Entrar() {
      if (!validarNomeUsuario(nome)){
      return;
} 
      if (!validaSenha(senha)){
       return;
   }
    navigation.navigate('Gestao')
  }


  return (

    <View style={styles.container}>
      <View style={styles.conter}>
      </View>
      <Text style={styles.text}>Complete os campos abaixo:</Text>
      <TextInput
        style={styles.senha}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} 
        keyboardType="numeric" // Adicionado para senhas numéricas 
        maxLength={4} // Limita a 4
      />
      <TextInput
        style={styles.nome}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.entrar} onPress={Entrar}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  senha: {
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
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 26,
    marginBottom: 20,
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