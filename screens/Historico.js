import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { AppContext } from "../context/UserContext";

export default function Historico({ navigation }) {

  const { user, historico } = useContext(AppContext);

  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: user ? `Histórico de ${user.nome}` : 'Histórico de Transações',
    });

    // Usa sempre o histórico global do contexto
    const dados = Array.isArray(historico) ? [...historico] : [];

    // Ordena por data mais recente primeiro
  const ordenado = [...dados].sort((a, b) => new Date(b.data) - new Date(a.data));

    setTransacoes(ordenado);
    setLoading(false);
  }, [user, navigation, historico]);

  const renderTransacaoItem = ({ item }) => (
    <View style={styles.transacaoItem}>
      <Text style={styles.transacaoData}>{item.data}</Text>
      <Text style={styles.transacaoDetalhe}>
        {item.tipo} {item.item ? `(${item.item})` : ''}
      </Text>
      <Text style={[
        styles.transacaoValor,
        { color: item.valor > 0 ? '#108930' : '#CC3300' }
      ]}>
        {item.valor > 0 ? '+' : '-'} R$ {Math.abs(item.valor).toFixed(2)}
      </Text>
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
        <Text style={styles.noDataText}>Nenhuma transação registrada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  titleText: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, marginTop: 10, color: '#333', textAlign: 'center' },
  listContainer: { paddingBottom: 20 },
  transacaoItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 15, marginBottom: 8, backgroundColor: '#F1DAFF', borderRadius: 8, borderWidth: 1, borderColor: '#E0C5FF', alignItems: 'center' },
  transacaoData: { fontSize: 12, color: '#888' },
  transacaoDetalhe: { fontSize: 15, fontWeight: '500', color: '#333' },
  transacaoValor: { fontSize: 16, fontWeight: 'bold' },
  loading: { marginTop: 50 },
  noDataText: { fontSize: 16, color: '#666', textAlign: 'center' },
});
