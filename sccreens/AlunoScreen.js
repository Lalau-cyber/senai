import  { useContext, useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { AppContext } from '../AppContext';


export default function SimScreen({ navigation }) {

   const [matricula, setMatricula] = useState("");
   const [nome, setNome] = useState("");
   const { userType, setUserType } = useContext(AppContext);
  useEffect(() => {
    setUserType('aluno');
  }, []);
  
  const validaMatricula = (matricula) => {
    if(matricula.length != 8){
      alert("Matrícula inválida. Deve conter 8 caracteres.");
   return false;
   }
   if (nome.trim().length === 0) {
      alert("Informe um nome válido.");
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
      return true;
    };
    function Entrar() {
      return validarFormulario(true);
    } 
  
  const validarFormulario = (aluno) => {
    if(validarNomeUsuario(nome) && validaMatricula(matricula)){
        aluno ? navigation.navigate('SimScreen', { nome, matricula }) : navigation.navigate('NaoScreen', { nome, matricula });
      }
    }
    
  
  return (

    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Matrícula" 
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"    
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.touch} onPress={() => navigate. navigate(Entart)}>
      <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
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