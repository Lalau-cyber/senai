import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../AppContext';
import { useState } from "react";

export default function NaoScreen() {

   const [senha, setSenha] = useState("");
   const [nome, setNome] = useState("");
   
  const validaSenha = (senha) => {
    if(senha.length != 8){
      alert("Seha inválida. Deve conter 8 caracteres.");
   return false;
   }
   return true;
  }

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
     const { userType, setUserType } = useContext(AppContext);
      useEffect(() => {
        setUserType('aluno');
      }, []);
      eturn (
      
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
      
         <TouchableOpacity style={styles.touch} onPress={Entrar()}>
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