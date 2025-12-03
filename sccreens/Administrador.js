import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function AdministradorScreen({ navigation }) {
    const criarAluno = () => {
      // Lógica para criar aluno
      console.log('Criar Aluno');
    };
  
    const excluirAluno = () => {
      // Lógica para excluir aluno
      console.log('Excluir Aluno');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Página do Administrador</Text>
        <TouchableOpacity style={styles.button} onPress={criarAluno}>
          <Text style={styles.buttonText}>Criar Aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={excluirAluno}>
          <Text style={styles.buttonText}>Excluir Aluno</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
},
buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
});