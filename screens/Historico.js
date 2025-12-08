import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { AppContext } from "../context/UserContext";
import { ThemeContext } from '../context/TemaContext';

export default function Historico({ navigation }) {
  const { user, historico } = useContext(AppContext);
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { theme } = useContext(ThemeContext);
  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;

  useEffect(() => {
    navigation.setOptions({
      title: user ? `Histórico de ${user.nome}` : 'Histórico de Transações',
    });

    const dados = Array.isArray(historico) ? [...historico] : [];

    // Ordena por data mais recente primeiro
    const ordenado = [...dados].sort((a, b) => new Date(b.data) - new Date(a.data));

    setTransacoes(ordenado);
    setLoading(false);
  }, [user, navigation, historico]);

  const renderTransacaoItem = ({ item }) => (
    <View style={commonStyles.transacaoItem}>
      <Text style={[commonStyles.transacaoData, themedStyles.text]}>{item.data}</Text>
      <Text style={[commonStyles.transacaoDetalhe, themedStyles.text]}>
        {item.tipo} {item.item ? `(${item.item})` : ''}
      </Text>
      <Text style={[
        commonStyles.transacaoValor,
        { color: item.valor > 0 ? '#108930' : '#CC3300' }
      ]}>
        {item.valor > 0 ? '+' : '-'} R$ {Math.abs(item.valor).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={[commonStyles.container, themedStyles.container]}>
      <Text style={[commonStyles.titleText, themedStyles.text]}>Transações Recentes</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#B862F2" style={commonStyles.loading} />
      ) : transacoes.length > 0 ? (
        <FlatList
          data={transacoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTransacaoItem}
          contentContainerStyle={commonStyles.listContainer}
        />
      ) : (
        <Text style={[commonStyles.noDataText, themedStyles.text]}>Nenhuma transação registrada.</Text>
      )}
    </View>
  );
}

// Tema claro
const lightStyles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  text: { color: '#000' },
});

// Tema escuro
const darkStyles = StyleSheet.create({
  container: { backgroundColor: '#000' },
  text: { color: '#fff' },
});

// Estilos fixos
const commonStyles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
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
  noDataText: { fontSize: 16, textAlign: 'center' },
});
