
import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/UserContext';


export default function NaoScreen({ navigation }) {

  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const { userType, setUserType } = useContext(AppContext);
  useEffect(() => {
    setUserType('administrador');
  }, []);

  const validaSenha = (senha) => {
    if (senha.length !== 8) {
      alert("Seha inválida. Deve conter 8 caracteres.");
      return false;
    }
    return true;
  };

  const validarNomeUsuario = (nome) => {
    if (!nome.trim()) {
      alert("informe um nome válido");
      return false;
    }
    const temCaracteresEspeciais = nome.includes('@') || nome.includes('#') || nome.includes('$') || nome.includes('%') || nome.includes('&') || nome.includes('*') || nome.includes('!');
    if (!temCaracteresEspeciais) {
      alert("Nome de usuário inválido. Deve conter caracteres especiais.");
      return false;
    };
    return true;
  };
  function Entrar() {
    if (validarNomeUsuario(nome)) return;
    if (validaSenha(senha)) return;
    navigation.navigate('EntrarSaldo', { nome, matricula, saldo: 0.0 })
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
    borderBottomWidth: 2,
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