import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';

export default function CardapioScreen() {
  const { saldo, setSaldo, historico, setHistorico, user } = useContext(AppContext);
  

  const Salgados = [
    { id: '1', nome: '🍕 Pizza', preco: 7.5 },
    { id: '2', nome: '🍔 Hambúrguer', preco: 7.5 },
    { id: '3', nome: '🥟Pastel', preco: 6.0 },
    { id: '4', nome: '🍟 Batata Frita', preco: 5.0 },
    { id: '5', nome: '🍗 Coxinha', preco: 4.0 },
    { id: '6', nome: '🥪Sanduiche', preco: 3.5 },
  ];
  const Doces = [

    {id : '7', nome: '🧁 açaí',preco: 15.00},
    {id : '8', nome: '🍰 Bolo',preco: 3.50},
    {id : '9', nome: '🍪 Cooke', preco: 2.00},
    {id : '10', nome: '🍭 Pirulito', preco:0.50},
    {id : '11', nome: '🍫 Chocolate', preco:3.50},
  ];
  const Sucos = [
    {id : '12', nome: '🍋Maracuja',preco: 4.50},
    {id : '13', nome: '🍍Abacaxi',preco: 4.50},
    {id : '14', nome: '🥤MilkShake',preco: 4.50},
    {id : '15', nome: '🍇Uva',preco: 4.50},
    {id : '16', nome: '🍎Maça',preco: 4.50},
  ]

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
  item: item.nome,
  data: new Date().toISOString().split('T')[0],
  valor: -item.preco
};

setHistorico([...historico, novaTransacao]);
    Alert.alert("Compra realizada", `Você comprou: ${item.nome}`);
  };

 const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome} - R$ {item.preco.toFixed(2)}</Text>
      <TouchableOpacity onPress={() => handleComprar(item)}>
        <Text style={styles.compra}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>

      <Text style={styles.subtitulo}>🍴 Salgados</Text>
      <FlatList data={Salgados} keyExtractor={(item) => item.id} renderItem={renderItem} />

      <Text style={styles.subtitulo}>🍬 Doces</Text>
      <FlatList data={Doces} keyExtractor={(item) => item.id} renderItem={renderItem} />

      <Text style={styles.subtitulo}>🥤 Sucos</Text>
      <FlatList data={Sucos} keyExtractor={(item) => item.id} renderItem={renderItem} />
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
  itens: {
     fontSize: 18
   },
  precos: { 
    fontSize: 18, 
    fontWeight: '600',
     color: '#2a9d8f' 
    },
  conter: {
     width: '100%', 
     height: 20, 
     backgroundColor: '#B862F2' 
    },
  botaoComprar: {
    backgroundColor: '#B862F2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoBotao: {
     color: '#fff', 
     fontSize: 16, 
     fontWeight: 'bold'
     },
     compra:{
     backgroundColor:' #B862F2',
     },
});

