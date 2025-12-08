import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/UserContext';

export default function HistoricoAdm({ navigation }) {
  const { user, historico } = useContext(AppContext);
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: user ? `Histórico - ${user.nome}` : 'Histórico de Transações',
    });

    const dados = Array.isArray(historico) ? [...historico] : [];
    const ordenado = [...dados].sort((a, b) => new Date(b.data) - new Date(a.data));

    setTransacoes(ordenado);
    setLoading(false);
  }, [user, navigation, historico]);

  const renderTransacaoItem = ({ item }) => (
    <View style={styles.transacaoItem}>
      <Text style={[styles.transacaoData, styles.text]}>{item.data}</Text>
      <Text style={[styles.transacaoDetalhe, styles.text]}>
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
    <SafeAreaView style={[styles.container, styles.bgContainer]}>
      <Text style={[styles.titleText, styles.text]}>Histórico Detalhado</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#B862F2" style={styles.loading} />
      ) : transacoes.length > 0 ? (
        <FlatList
          data={transacoes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTransacaoItem}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={[styles.noDataText, styles.text]}>Nenhuma transação registrada.</Text>
      )}
      
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
  container: { flex: 1, padding: 10 },
  bgContainer: { backgroundColor: '#fff' },
  text: { color: '#000' },
  titleText: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, marginTop: 10, textAlign: 'center' },
  listContainer: { paddingBottom: 20 },
  transacaoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 8,
    backgroundColor: '#F1DAFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0C5FF',
    alignItems: 'center',
  },
  transacaoData: { fontSize: 12 },
  transacaoDetalhe: { fontSize: 15, fontWeight: '500' },
  transacaoValor: { fontSize: 16, fontWeight: 'bold' },
  loading: { marginTop: 50 },
  noDataText: { fontSize: 16, textAlign: 'center', marginTop: 20 },
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
