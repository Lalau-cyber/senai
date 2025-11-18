import  React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/UserContext';
import {navigate} from 'react';


export default function NaoScreen({ navigation }) {

   const [senha, setSenha] = useState("");
   const [nome, setNome] = useState("");
   const { userType, setUserType } = useContext(AppContext);
      useEffect(() => {
        setUserType('administrador');
      }, []);

  const validaSenha = (senha) => {
    if(senha.length != 8){
      alert("Seha inválida. Deve conter 8 caracteres.");
   return false;
   }
   if (nome.trim().length === 0) {
      alert("Informe um nome válido.");
      return false;
    }
    return true;
  };

  const validarNomeUsuario = (n) => n.trim().length > 0;

  const Entrar = () => {
    if (!validaMatricula(matricula)) {
      alert('Matrícula inválida. Use 8 dígitos.');
      return;
    }
    if (!validarNomeUsuario(nome)) {
      alert('Informe o nome.');
      return;
    }
    navigation.navigate('EntrarSaldo', { nome, matricula, saldo: 0.0 })
    }
     
   return (
      
  <View style={styles.container}>
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
      
         <TouchableOpacity style={styles.entrar}onPress={() => navigate.navigate(AdScreen)}>
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
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: '80%',
      borderRadius: 5,
      backgroundColor: '#F1DAFF',
      
    },
    nome: {
      height: 40,
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
      fontWeight: 'bold',
      marginTop: 50,
      fontSize: 20,
      marginBottom: 20,
      width: '80%',
    },
    textoBotao: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },
});