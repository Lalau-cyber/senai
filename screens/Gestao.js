import { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';

const mockAlunos = [
  { id: '1', nome: 'João Silva', matricula: '2023001', saldo: 150.50, historico: [
    { data: '2025-12-01', item: 'Pizza', valor: -7.5 },
    { data: '2025-12-02', item: 'Suco', valor: -4.5 },
    { data: '2025-12-03', item: 'Recarga', valor: +50 },
  ]},
  { id: '2', nome: 'Maria Souza', matricula: '2023002', saldo: 85.00, historico: [
    { data: '2025-12-01', item: 'Coxinha', valor: -4.0 },
    { data: '2025-12-02', item: 'Chocolate', valor: -3.5 },
  ]},
  { id: '3', nome: 'Pedro Almeida', matricula: '2023003', saldo: 200.75, historico: [
    { data: '2025-12-01', item: 'Pastel', valor: -6.0 },
    { data: '2025-12-02', item: 'Recarga', valor: +100 },
  ]},
];

export default function Gestao() {
  const [alunos, setAlunos] = useState(mockAlunos);
  const { user } = useContext(AppContext);
  const navigation = useNavigation();

  const verHistorico = (aluno) => {
    navigation.navigate('HistoricoAluno', { aluno });
  };

useEffect(() => {
  if (user) {
    setAlunos((prev) => {
      const existe = prev.some(a => a.matricula === user.matricula);
      if (existe) return prev;
      return [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`, // id único
          nome: user.nome,
          matricula: user.matricula,
          saldo: user.saldo || 0,
          historico: user.historico || []
        }
      ];
    });
  }
}, [user]);


  const excluirAluno = (alunoId) => {
  Alert.alert(
    'Confirmação de Exclusão',
    `Tem certeza que deseja excluir o cadastro do aluno ID ${alunoId}?`,
    [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          setAlunos((prev) => prev.filter(aluno => aluno.id !== alunoId));
          Alert.alert('Sucesso', 'Aluno excluído com sucesso.');
        },
      },
    ]
  );
};



  const renderAlunoItem = ({ item }) => (
    <View style={styles.alunoItem}>
      <View style={styles.alunoInfo}>
        <Text style={styles.alunoNome}>
          <Text style={styles.labelBold}>Nome:</Text> {item.nome}
        </Text>
        <Text style={styles.alunoDetalhe}>
          <Text style={styles.labelBold}>Matrícula:</Text> {item.matricula}
        </Text>
        <Text style={styles.alunoDetalhe}>
          <Text style={styles.labelBold}>Saldo: </Text>
           <Text>R$ {item.saldo.toFixed(2)}
        </Text>
          </Text>
      </View>
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botaoHistorico} onPress={() => verHistorico(item)}>
          <Text style={styles.textoBotao}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={styles.botaoExcluir}
  onPress={() => {
    excluirAluno(item.id);
  }}>  
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
          keyExtractor={(item) => String(item.id)}
          renderItem={renderAlunoItem}
          contentContainerStyle={[styles.listContainer, { marginTop: 10 }]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
  alunoInfo: { flex: 1 },
  alunoNome: { fontSize: 16, marginBottom: 5 },
  alunoDetalhe: { fontSize: 14, color: '#555' },
  labelBold: { fontWeight: 'bold' },
  botoesContainer: { flexDirection: 'row', marginLeft: 10 },
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
  textoBotao: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  noDataText: { fontSize: 16, color: '#888', marginTop: 50 },
});
