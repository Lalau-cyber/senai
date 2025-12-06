import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';

export default function CardapioScreen() {
  const { saldo, setSaldo, historico, setHistorico, user } = useContext(AppContext);

  const cardapio = [
    { id: '1', nome: '🍕 Pizza', preco: 7.5 },
    { id: '2', nome: '🍔 Hambúrguer', preco: 7.5 },
    { id: '3', nome: '🥤 Refrigerante 600ml', preco: 6.0 },
  ];

  const handleComprar = (item) => {
    if (saldo < item.preco) {
      Alert.alert("Saldo insuficiente", "Você não tem saldo suficiente.");
      return;
    }

    // Atualiza saldo
    setSaldo(saldo - item.preco);

    // Adiciona transação ao histórico
    const novaTransacao = {
      id: Date.now().toString(),
      tipo: 'Compra',
      valor: -item.preco,
      data: new Date().toISOString().split('T')[0],
      item: item.nome,
      aluno: user?.nome,
    };
    setHistorico([...historico, novaTransacao])

    Alert.alert("Compra realizada", `Você comprou: ${item.nome}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} - R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => handleComprar(item)}>
              <Text>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  titulo: {
    textAlign: 'center',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 26,
    marginBottom: 25,
    width: '80%',
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itens: { fontSize: 18 },
  precos: { fontSize: 18, fontWeight: '600', color: '#2a9d8f' },
  conter: { width: '100%', height: 20, backgroundColor: '#B862F2' },
  botaoComprar: {
    backgroundColor: '#B862F2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoBotao: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

