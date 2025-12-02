import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function CardapioScreen() {
  const cardapio = [
    { id: '1', nome: 'Pizza', preco: 7.5 },
    { id: '2', nome: 'Hambúrguer', preco: 7.5 },
    { id: '3', nome: 'refri 600ml', preco: 6.0 },
    { id: '4', nome: 'salgado', preco: 7.0 },
    { id: '5', nome: 'refri 1,5L', preco: 8.0 },
    { id: '6', nome: 'açai', preco: 15.0 },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.nome}</Text>
            <Text style={styles.itemPrice}>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2a9d8f',
  },
});
