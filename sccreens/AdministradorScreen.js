import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AppContext } from '../AppContext';
import { useState, useContext, useEffect } from "react";
import { EntrarSaldo } from '../EntrarSaldo';

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
         <TextInput
              style={styles.input}
              placeholder="Senha" 
              value={senha}
              onChangeText={setSenha}
            />
          <TextInput
              style={styles.input}
              placeholder="Nome"    
              value={nome}
              onChangeText={setNome}
            />
      
         <TouchableOpacity style={styles.entrar}onPress={() => navigate.navigate('EntrarSaldo')}>
            <Text>Entrar</Text>
         </TouchableOpacity>
  </View>
        );
      
}

  const styles = StyleSheet.create({

  container: {
     flex: 1,
      paddingTop: 40, 
      alignItems: 'center', 
      backgroundColor: '#fff' 
    },
});