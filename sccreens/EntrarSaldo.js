// ...existing code...
import { View, Text, StyleSheet } from 'react-native';

<<<<<<< HEAD
export default function EntrarSaldoScreen({ navigate }) {
=======
export default function EntrarSaldoScreen({ navigation, route }) {
>>>>>>> 78efc354e0be6c06a0cbf3485f8cbe428a3c5e68
  // recebe saldo via params: navigation.navigate('Saldo', { saldo: 12.5 })
  // const saldoParam = route?.params?.saldo;
  // const saldo = typeof saldoParam === 'number' ? saldoParam : parseFloat(saldoParam) || 0;

  return (
    <View style={styles.container}>
      <View style ={styles.histo}>
        <Button title="📒" onPress={(sa)} />
      </View>
      <Text style={styles.title}>Saldo do Ticket</Text>
      <Text style={styles.balance}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
      <Text style={styles.note}>Última atualização: agora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: '600',
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2a9d8f',
  },
  note: {
    marginTop: 10,
    color: '#666',
  },
});
// ...existing code...


//Para mostrar o saldo a partir de outra tela, navegue assim:
//navigation.navigate('Saldo', { saldo: 12.5 })