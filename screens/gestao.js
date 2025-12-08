import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/UserContext';

export default function Gestao({ navigation }) {
  const { user } = useContext(AppContext);

  // Dados simulados de alunos
  const [alunos] = useState([
    { id: '1', nome: 'João Silva', matricula: '2023001', saldo: 150.50, status: 'Ativo' },
    { id: '2', nome: 'Maria Souza', matricula: '2023002', saldo: 85.00, status: 'Ativo' },
    { id: '3', nome: 'Pedro Almeida', matricula: '2023003', saldo: 200.75, status: 'Inativo' },
  ]);

  const renderAluno = ({ item }) => (
    <View style={styles.alunoItem}>
      <Text style={styles.alunoNome}>{item.nome}</Text>
      <Text style={styles.alunoMatricula}>Matrícula: {item.matricula}</Text>
      <Text style={styles.alunoSaldo}>Saldo: R$ {item.saldo.toFixed(2)}</Text>
      <Text style={styles.alunoStatus}>Status: {item.status}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Gestão de Alunos</Text>
      
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={renderAluno}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum aluno encontrado.</Text>}
      />

      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
    textAlign: 'center',
  },
  alunoItem: {
    backgroundColor: '#F1DAFF',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0C5FF',
  },
  alunoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  alunoMatricula: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  alunoSaldo: {
    fontSize: 14,
    color: '#2a9d8f',
    fontWeight: '600',
    marginBottom: 4,
  },
  alunoStatus: {
    fontSize: 14,
    color: '#666',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
  botaoVoltar: {
    backgroundColor: '#B862F2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
