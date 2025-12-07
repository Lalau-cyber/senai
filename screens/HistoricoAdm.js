
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HistoricoAluno({ route }) {
  const { aluno } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.transacaoItem}>
      <Text style={styles.data}>{item.data}</Text>
      <Text style={styles.valor}>
        {item.valor < 0 ? 'Gasto' : 'Crédito'}: R$ {Math.abs(item.valor).toFixed(2)}
      </Text>
      <Text style={styles.item}>{item.item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de {aluno.nome}</Text>
      {aluno.historico?.length > 0 ? (
        <FlatList
          data={aluno.historico}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.noData}>Nenhuma transação registrada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
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
