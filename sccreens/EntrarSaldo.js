// ...existing code...
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function EntrarSaldoScreen({ navigation, route }) {
  const saldoParam = route?.params?.saldo ?? 0;
  const [saldo, setSaldo] = useState(Number(saldoParam) || 0);


  // atualiza quando receber novo saldo via params
  useEffect(() => {
    const novoSaldo = route?.params?.saldo;
    if (novoSaldo !== undefined) setSaldo(Number(saldo));
  }, [route?.params?.saldo]);

  

  return (
    <View style={styles.container}>
      <View style={styles.conter}>
         </View>
      <View style={styles.histo}>
        <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('abrirMenu' )}>
      <Text style={styles.tmenu}>⚙️</Text>
       </TouchableOpacity> 
        <Text style={styles.title}>Saldo do Ticket</Text>
        <Text style={styles.balance}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.note}>Última atualização: agora</Text>

      <View style={styles.botoesContainer}>
       <TouchableOpacity style={styles.botoes} onPress={() => navigation.navigate('Recarregar', { saldo })}>
      <Text style={styles.textbotoes}>Recarregar</Text>
       </TouchableOpacity>
         <TouchableOpacity style={styles.botoes} onPress={() => navigation.navigate('cardapioScreen', {CardapioScreen})}>
      <Text style={styles.textbotoes}>Comprar</Text>
       </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  histo: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 12,
    fontWeight: '600',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2a9d8f',
  },
  note: {
    fontStyle: 'italic',
    marginTop: 10,
    color: '#666',
  },
  botoes: {
    marginTop: 20,
    backgroundColor: '#B862F2',
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    padding: 10,
    borderColor: 'black',
  },
  menu:{
    backgroundColor: 'invisible',
    padding: 10,
    alignSelf: 'flex-end',
    borderColor: 'black',
    borderWidth: 0,
  },
  tmenu:{
    fontSize: 30,
  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },
  botoesContainer:{
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  textbotoes: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },

});
