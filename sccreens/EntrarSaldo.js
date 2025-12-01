// ...existing code...
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AbrirMenu from './abrirMenu';

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
        <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('abrirMenu' )}>
      <Text style={styles.tmenu}>Configurações</Text>
       </TouchableOpacity> 
        <Text style={styles.title}>Saldo do Ticket</Text>
        <Text style={styles.balance}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.note}>Última atualização: agora</Text>

        <TouchableOpacity style={styles.voltar} onPress={abrirRecarregar}>
          <Text style={{ color: '#fff', padding: 8 }}>Recarregar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.voltar, { marginTop: 10 }]} onPress={() => navigation.navigate()}>
          <Text style={{ color: '#fff', padding: 8 }}>comprar</Text>
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
  menu:{
    backgroundColor: '#B862F2',
    padding: 10,
    borderRadius: 100,  
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'flex-start'
  },
  tmenu:{
    color: '#fff', 
  },

});
