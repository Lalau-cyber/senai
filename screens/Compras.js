import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useContext } from 'react'; 
import { AppContext } from '../context/UserContext';

// Função utilitária para formatar a moeda no padrão brasileiro
const formatCurrency = (value) => {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
};

// Componente para renderizar cada item da lista
const CompraItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{item.item}</Text>
    <Text
      style={[
        styles.itemSub,
        { color: item.valor > 0 ? '#108930' : '#CC3300' }
      ]}
    >
      {item.data} — {formatCurrency(item.valor)}
    </Text>
  </View>
);

export default function Compras({ navigation }) {
  const { user, historico } = useContext(AppContext);

  if (!user) {
    Alert.alert("Erro", "Nenhum usuário logado.");
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.emptyText}>Faça login para ver suas compras.</Text>
      </SafeAreaView>
    );
  }

  // ✅ filtra apenas transações do tipo "Compra"
  const compras = Array.isArray(historico) ? historico.filter(h => h.tipo === 'Compra') : [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Histórico de Compras</Text>
      
      <FlatList
        data={compras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CompraItem item={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Você ainda não fez nenhuma compra.</Text>
        }
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
  itemTitle: { fontSize: 16, fontWeight: '600' },
  itemSub: { color: '#666' },
  button: { marginTop: 20, backgroundColor: '#B862F2', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { textAlign: 'center', paddingVertical: 30, color: '#A0A0A0', fontStyle: 'italic' }
});
