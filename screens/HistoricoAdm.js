import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ThemeContext } from '../context/TemaContext';

export default function HistoricoAluno({ route }) {
  const { aluno } = route.params;
  const { theme } = useContext(ThemeContext);

  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;

  const renderItem = ({ item }) => (
    <View style={commonStyles.transacaoItem}>
      <Text style={commonStyles.data}>{item.data}</Text>
      <Text style={commonStyles.valor}>
        {item.valor < 0 ? 'Gasto' : 'Crédito'}: R$ {Math.abs(item.valor).toFixed(2)}
      </Text>
      <Text style={commonStyles.item}>{item.item}</Text>
    </View>
  );

  return (
    <View style={[commonStyles.container, themedStyles.container]}>
      <Text style={[commonStyles.titulo, themedStyles.text]}>Histórico de {aluno.nome}</Text>
      {aluno.historico?.length > 0 ? (
        <FlatList
          data={aluno.historico}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={[commonStyles.noData, themedStyles.text]}>Nenhuma transação registrada.</Text>
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
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  transacaoItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  data: { fontSize: 12, color: '#666' },
  valor: { fontSize: 16, fontWeight: 'bold', color: '#CC3300' },
  item: { fontSize: 14, color: '#333' },
  noData: { textAlign: 'center', marginTop: 20, color: '#888' },
});
