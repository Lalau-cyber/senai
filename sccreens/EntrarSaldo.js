
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function EntrarSaldoScreen({ navigation, route }) {
  // recebe saldo via params: navigation.navigate('Saldo', { saldo: 12.5 })
   const saldoParam = route?.params?.saldo;
  const saldo = typeof saldoParam === 'number' ? saldoParam : parseFloat(saldoParam) || 0;

  return (
    <View style={styles.container}>
      <View style ={styles.histo}>
        
        <Text style={styles.title}>Saldo do Ticket</Text>
        <Text style={styles.balance}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.note}>Última atualização: agora</Text>

       <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
      <Text>regarregar</Text>
       </TouchableOpacity>
         <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('cardapio')}>
      <Text>comprar</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  voltar: {
    marginTop: 20,
    backgroundColor: '#B862F2', 
    borderWidth: 1,
  },
});



//Para mostrar o saldo a partir de outra tela, navegue assim:
//navigation.navigate('Saldo', { saldo: 12.5 })