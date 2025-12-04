
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const mock = [
  { id: '1', title: 'Compra - Cantina', value: 7.5, date: '2025-11-01' },
  { id: '2', title: 'Recarrega', value: 20.0, date: '2025-11-10' },
];

export default function Historico({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.conter}> 
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Histórico de Movimentações</Text>
        {mock.length > 0 ? (
          mock.map((item) => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSub}>{item.date} — R$ {item.value.toFixed(2).replace('.', ',')}</Text>
            </View>
          ))
        ) : (
          <Text>Nenhuma movimentação</Text>
        )}
      </ScrollView>
      <TouchableOpacity style={styles.buttonFixed} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentWrapper: {
    flex: 1,
    flexDirection: 'column',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },

  scrollView: {
    flex: 1,
  },

  title: {
    marginTop: 30,
    fontSize: 30,
    marginBottom: 12,
    fontWeight: '600',
    fontFamily: 'geoegia',
    fontStyle: 'italic',
    textAlign: 'center'
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: '600'
  },

  itemSub: {
    color: '#666'
  },

  buttonFixed: {
    backgroundColor: '#B862F2',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#B862F2',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  buttonText: {
    color: '#fff'
  },

  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },

});