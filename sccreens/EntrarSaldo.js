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

  const abrirRecarregar = () => {
    navigation.navigate('Recarregar', { saldo }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.histo}>
        <Text style={styles.menu} onpress={abrirMenu}>•••</Text>
        <Text style={styles.title}>Saldo do Ticket</Text>
        <Text style={styles.balance}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.note}>Última atualização: agora</Text>

<<<<<<< HEAD
       <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
      <Text>regarregar</Text>
       </TouchableOpacity>
         <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('cardapio')}>
      <Text>comprar</Text>
       </TouchableOpacity>
=======
        <TouchableOpacity style={styles.voltar} onPress={abrirRecarregar}>
          <Text style={{ color: '#fff', padding: 8 }}>Recarregar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.voltar, { marginTop: 10 }]} onPress={() => navigation.navigate()}>
          <Text style={{ color: '#fff', padding: 8 }}>comprar</Text>
        </TouchableOpacity>
>>>>>>> d23908286dbc9f0bf5404d653d03b795386a555d
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
  histo: {
    alignItems: 'center',
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
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#000',
  },
});
