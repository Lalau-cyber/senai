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