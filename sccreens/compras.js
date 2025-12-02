
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockCompras = [
  { id: '1', item: 'Sanduíche', price: 8.0, date: '2025-11-02' },
  { id: '2', item: 'Suco', price: 3.5, date: '2025-11-03' },
];

export default function Compras({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compras feitas</Text>
      <FlatList
        data={mockCompras}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.item}</Text>
            <Text style={styles.itemSub}>{item.date} — R$ {item.price.toFixed(2).replace('.', ',')}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhuma compra</Text>}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16, backgroundColor:'#fff' },
  title: { fontSize:18, fontWeight:'700', marginBottom:12 },
  item: { paddingVertical:12, borderBottomWidth:1, borderColor:'#eee' },
  itemTitle: { fontSize:16, fontWeight:'600' },
  itemSub: { color:'#666' },
  button: { marginTop:12, backgroundColor:'#B862F2', padding:10, borderRadius:6, alignItems:'center' },
  buttonText: { color:'#fff' },
});