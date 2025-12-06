import { useState,useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';

// Dados de alunos fictícios para simular a lista
const mockAlunos = [
{ id: '1', nome: 'João Silva', matricula: '2023001', saldo: 150.50 },
 { id: '2', nome: 'Maria Souza', matricula: '2023002', saldo: 85.00 },
 { id: '3', nome: 'Pedro Almeida', matricula: '2023003', saldo: 200.75 },
];

export default function Gestao({ navigation }) {
 const [alunos, setAlunos] = useState(mockAlunos);
const {user} = useContext(AppContext);
 const verHistorico = (aluno) => { // MELHORIA: Navegação Real para a tela 'historico' (supondo que ela esteja no seu Stack)
navigation.navigate('historico', { 
        alunoId: aluno.id,
        alunoNome: aluno.nome 
    });
};

 const excluirAluno = (alunoId) => {
 Alert.alert('Confirmação de Exclusão',
 `Tem certeza que deseja excluir o cadastro do aluno ID ${alunoId}?`,
[
 {
text: 'Cancelar',
 style: 'cancel',
},
{
 text: 'Excluir',
 onPress: () => {
 const novaLista = alunos.filter(aluno => aluno.id !== alunoId);
 setAlunos(novaLista);
 Alert.alert('Sucesso', 'Aluno excluído com sucesso.');
 },
style: 'destructive',
},
]
 );
};

 // Item a ser renderizado na FlatList
 const renderAlunoItem = ({ item }) => (
   <View style={styles.alunoItem}>
   <View style={styles.alunoInfo}>
 {/* CORREÇÃO: Aplicação do Negrito via estilo aninhado */}
 <Text style={styles.alunoNome}>
 <Text style={styles.labelBold}>Nome:</Text> {item.nome}
 </Text>
 <Text style={styles.alunoDetalhe}>
 <Text style={styles.labelBold}>Matrícula:</Text> {item.matricula}
 </Text>
<Text style={styles.alunoDetalhe}>
<Text style={styles.labelBold}>Saldo:</Text> R$ {item.saldo.toFixed(2)}
 </Text>
</View>
 <View style={styles.botoesContainer}>
 <TouchableOpacity style={styles.botaoHistorico} onPress={() => verHistorico(item)}>
 <Text style={styles.textoBotao}>Histórico</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.botaoExcluir} onPress={() => excluirAluno(item.id)}>
 <Text style={styles.textoBotao}>Excluir</Text>
 </TouchableOpacity>
</View>
 </View>
 );

 return (
 <View style={styles.container}>
 <Text style={styles.headerText}>Gestão de Alunos (Administrador)</Text>
 {alunos.length === 0 ? (
 <Text style={styles.noDataText}>Nenhum aluno cadastrado.</Text>
 ) : (
 <FlatList
data={alunos}
 keyExtractor={(item) => item.id}
renderItem={renderAlunoItem}
 contentContainerStyle={styles.listContainer}
 />
 )}
 </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },
  headerText: {
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    width: '90%',
  },
  alunoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#F1DAFF', 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B862F2',
  },
  alunoInfo: {
    flex: 1,
  },
  alunoNome: {
    // Removido negrito daqui
    fontSize: 16,
    marginBottom: 5,
  },
  alunoDetalhe: {
    fontSize: 14,
    color: '#555',
  },
  // NOVO ESTILO: Para aplicar negrito apenas nos labels
  labelBold: {
    fontWeight: 'bold',
  },
  botoesContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  botaoHistorico: {
    backgroundColor: '#B862F2',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  botaoExcluir: {
    backgroundColor: '#F44336', 
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  noDataText: {
    fontSize: 16,
    color: '#888',
 marginTop: 50,
  }
});