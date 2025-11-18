import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AppContext } from '../AppContext';
import { useState, useContext, useEffect } from "react";

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
      console.log("Nome inválido");
      return false;
    }
    return true;
  };
  

  const validarNomeUsuario = (nome) => {
      const temCaracteresEspeciais = nome.includes('@') || nome.includes('#') || nome.includes('$') || nome.includes('%') || nome.includes('&') || nome.includes('*')|| nome.includes('!');
      if (!temCaracteresEspeciais) {
      alert("Nome de usuário inválido. Deve conter caracteres especiais.");
      return false;
       }
      }
       function Entrar() {
      return validarFormulario(true);
    } 
  
  const validarFormulario = (administrador) => {
    if(validarNomeUsuario(nome) && validaSenha(senha)){
        administrador ? navigation.navigate('SimScreen', { nome, senha }) : navigation.navigate('NaoScreen', { nome, senha });
      }
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
      
         <TouchableOpacity style={styles.entrar} onPress={() => navigate. navigate("Entrar")}>
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