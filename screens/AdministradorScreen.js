import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';
import { ThemeContext } from '../context/TemaContext';

export default function NaoScreen({ navigation }) {
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const { setUserType } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;

  useEffect(() => {
    setUserType('administrador');
  }, []);

  const validaSenha = (senha) => {
    if (senha.length !== 4) {
      Alert.alert("Erro de Senha", "Senha inválida. Deve conter 4 caracteres.");
      return false;
    }
    return true;
  };

  const validarNomeUsuario = (nome) => {
    if (!nome.trim()) {
      Alert.alert("Erro de Nome", "Informe um nome válido");
      return false;
    }
    // Exemplo: proibir caracteres especiais
    const temCaracteresEspeciais = /[@#$%&*!]/.test(nome);
    if (temCaracteresEspeciais) {
      Alert.alert("Erro de Nome", "Nome inválido. Não deve conter caracteres especiais.");
      return false;
    }
    return true;
  };

  function Entrar() {
    if (!validarNomeUsuario(nome) || !validaSenha(senha)) {
      return;
    }
    navigation.navigate('Gestao');
  }

  return (
    <View style={themedStyles.container}>
      <View style={commonStyles.conter} />
      <Text style={[commonStyles.text, themedStyles.text]}>Complete os campos abaixo:</Text>

      <TextInput
        style={[commonStyles.inputBase, themedStyles.input]}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        keyboardType="numeric"
        maxLength={4}
        placeholderTextColor={theme === 'dark' ? '#ccc' : '#555'}
      />
      <TextInput
        style={[commonStyles.inputBase, themedStyles.input]}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor={theme === 'dark' ? '#ccc' : '#555'}
      />

      <TouchableOpacity style={[commonStyles.entrarBase, themedStyles.entrar]} onPress={Entrar}>
        <Text style={[commonStyles.textoBotao, themedStyles.text]}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#000' },
  input: { backgroundColor: '#F1DAFF', color: '#000' },
  entrar: { backgroundColor: '#B862F2' },
});

const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff' },
  input: { backgroundColor: '#333', color: '#fff' },
  entrar: { backgroundColor: '#7A2BBF' },
});

const commonStyles = StyleSheet.create({
  inputBase: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
  },
  entrarBase: {
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
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },
});
