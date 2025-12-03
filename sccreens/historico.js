
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mock = [
  { id: '1', title: 'Compra - Cantina', value: 7.5, date: '2025-11-01' },
  { id: '2', title: 'Recarrega', value: 20.0, date: '2025-11-10' },
];

export default function Historico({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Movimentações</Text>
      <FlatList
        data={mock}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSub}>{item.date} — R$ {item.value.toFixed(2).replace('.', ',')}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhuma movimentação</Text>}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
  itemTitle: { fontSize: 16, fontWeight: '600' },
  itemSub: { color: '#666' },
  button: { marginTop: 12, backgroundColor: '#B862F2', padding: 10, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff' },
});