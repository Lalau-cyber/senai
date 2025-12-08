import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

// Dados fictícios para simular o histórico (em uma aplicação real, viria de uma API)
const mockHistorico = {
  // Histórico para Aluno ID '1'
  '1': [
    { id: 't1', tipo: 'Crédito', valor: 100.00, data: '2025-10-01' },
    { id: 't2', tipo: 'Compra', valor: -15.50, data: '2025-10-02', item: 'Café Expresso' },
    { id: 't3', tipo: 'Compra', valor: -34.00, data: '2025-10-05', item: 'Almoço Completo' },
  ],
  // Histórico para Aluno ID '2'
  '2': [
    { id: 't4', tipo: 'Crédito', valor: 50.00, data: '2025-10-10' },
    { id: 't5', tipo: 'Compra', valor: -25.00, data: '2025-10-11', item: 'Lanche da Tarde' },
  ],
  // ... adicione mais IDs de alunos e seus históricos aqui ...
};

// O componente recebe 'route' para acessar os parâmetros
export default function Historico({ route, navigation }) {
  // Acessa os parâmetros passados pela tela Gestao
  // Usamos {} para evitar erros caso route.params seja undefined
  const { alunoId, alunoNome } = route.params || {}; 
  
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define o cabeçalho da tela dinamicamente
    navigation.setOptions({
        title: alunoNome ? `Histórico de ${alunoNome}` : 'Histórico de Transações',
    });

    // Simula o carregamento dos dados históricos (substituir por fetch real)
    if (alunoId) {
      setLoading(true);
      setTimeout(() => {
        const dados = mockHistorico[alunoId] || [];
        setTransacoes(dados);
        setLoading(false);
      }, 800); // Simula um pequeno delay
    } else {
      setLoading(false);
    }
  }, [alunoId, navigation, alunoNome]);

  // Renderiza cada item da transação
  const renderTransacaoItem = ({ item }) => (
    <View style={styles.transacaoItem}>
      <View style={styles.dataContainer}>
        <Text style={styles.transacaoData}>{item.data}</Text>
      </View>
      <View style={styles.detalheContainer}>
        <Text style={styles.transacaoDetalhe}>
          {item.tipo} {item.item ? `(${item.item})` : ''}
        </Text>
      </View>
      <View style={styles.valorContainer}>
        <Text 
          style={[
            styles.transacaoValor, 
            { color: item.valor > 0 ? '#108930' : '#CC3300' } // Verde para crédito, Vermelho para débito
          ]}
        >
          {item.valor > 0 ? '+' : '-'} R$ {Math.abs(item.valor).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Transações Recentes</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#B862F2" style={styles.loading} />
      ) : transacoes.length > 0 ? (
        <FlatList
          data={transacoes}
          keyExtractor={(item) => item.id}
          renderItem={renderTransacaoItem}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.noDataText}>Nenhuma transação encontrada para este aluno.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  transacaoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 8,
    backgroundColor: '#F1DAFF', // Cor de fundo semelhante ao seu tema
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0C5FF',
    alignItems: 'center',
  },
  dataContainer: {
    flex: 2,
  },
  detalheContainer: {
    flex: 4,
    paddingHorizontal: 5,
  },
  valorContainer: {
    flex: 3,
    alignItems: 'flex-end',
  },
  transacaoData: {
    fontSize: 12,
    color: '#888',
  },
  transacaoDetalhe: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  transacaoValor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 50,
  },
  noDataText: {
    fontSize: 16,
    color: '#666',
  },
});