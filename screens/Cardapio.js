import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function CardapioScreen() {
  const cardapio = [
    { id: '1', nome: '🍕 Pizza', preco: 7.5 },
    { id: '2', nome: '🍔 Hambúrguer', preco: 7.5 },
    { id: '4', nome: '🥟 Salgado', preco: 7.0 },
    { id: '6', nome: '🥣 Açai 300ml', preco: 15.0 },
    { id: '3', nome: '🥤 Refrigerante 600ml', preco: 6.0 },
    { id: '5', nome: '🥤 Refrigerante 1,5L', preco: 12.0 },
    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.conter}>
            </View>
      <Text style={styles.titulo}>Cardápio</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itens}>{item.nome}</Text>
            <Text style={styles.precos}>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
          </View>
        )}
      />
    </View>
  );
}

return (
  <View style={styles.container}>
    <View style={styles.conter}></View>
    <Text style={styles.titulo}>Cardápio</Text>
    <FlatList
      data={cardapio}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itens}>{item.nome}</Text>
          <Text style={styles.precos}>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
        </View>
      )}
    />

    <TouchableOpacity style={styles.botaoComprar} onPress={() => console.log('Comprar')}>
      <Text style={styles.textoBotao}>Comprar</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    textAlign: 'center',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 26,
    marginBottom: 25,
    width: '80%',
    alingSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itens: {
    fontSize: 18,
  },
  precos: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2a9d8f',
  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },
  botaoComprar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#B862F2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold,'
  },
});
