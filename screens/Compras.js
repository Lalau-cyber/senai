import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useContext } from 'react'; 
import { AppContext } from '../context/UserContext';

const formatCurrency = (value) => `R$ ${value.toFixed(2).replace('.', ',')}`;

const CompraItem = ({ item }) => (
  <View style={commonStyles.item}>
    <Text style={[commonStyles.itemTitle, styles.text]}>{item.item}</Text>
    <Text
      style={[
        commonStyles.itemSub,
        styles.text,
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
    return (
      <SafeAreaView style={themedStyles.container}>
        <Text style={commonStyles.emptyText}>Faça login para ver suas compras.</Text>
      </SafeAreaView>
    );
  }

  const compras = Array.isArray(historico) ? historico.filter(h => h.tipo === 'Compra') : [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[commonStyles.title, styles.text]}>Histórico de Compras</Text>
      
      <FlatList
        data={compras}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CompraItem item={item} />}
        ListEmptyComponent={
          <Text style={commonStyles.emptyText}>Você ainda não fez nenhuma compra.</Text>
        }
      />

      <TouchableOpacity style={commonStyles.button} onPress={() => navigation.goBack()}>
        <Text style={commonStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  text: { color: '#000' },
});

const commonStyles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
  itemTitle: { fontSize: 16, fontWeight: '600' },
  itemSub: { fontSize: 14 },
  button: { marginTop: 20, backgroundColor: '#B862F2', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { textAlign: 'center', paddingVertical: 30, color: '#A0A0A0', fontStyle: 'italic' }
});
