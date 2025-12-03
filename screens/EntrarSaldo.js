import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AbrirMenu from './abrirMenu';

export default function EntrarSaldoScreen({ navigation, route }) {
  const saldoParam = route?.params?.saldo ?? 0;
  const [saldo, setSaldo] = useState(Number(saldoParam) || 0);
  const [menuVisible, setMenuVisible] = useState(false);


  useEffect(() => {
    const novoSaldo = route?.params?.saldo;
    if (novoSaldo !== undefined) setSaldo(Number(novoSaldo));
  }, [route?.params?.saldo]);

  return (
    <View style={styles.container}>
      <View style={styles.conter} />
      <View style={styles.histo}>
  
        <TouchableOpacity style={styles.menu} onPress={() => setMenuVisible(true)}>
          <Text style={styles.tmenu}>⚙️</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Saldo do Ticket</Text>
        <Text style={styles.balance}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.note}>Última atualização: agora</Text>

        <TouchableOpacity style={styles.botoes} onPress={() => navigation.navigate('Recarregar', { saldo })}>
          <Text style = {styles.textbotoes}>recarregar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botoes, { marginTop: 10 }]} onPress={() => navigation.navigate('Cardapio')}>
          <Text style = {styles.textbotoes}>comprar</Text>
        </TouchableOpacity>
      </View>

      <AbrirMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
}
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
    fontFamily: 'geoegia',
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
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexboxDirection: 'row',
    
  },
  textbotoes: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  menu: {
    position: 'absolute',
    top: 8,
    right: 12,
    backgroundColor: 'transparent',
    padding: 8,
    zIndex: 10,
    bordeRadius: 5,
  },
  tmenu: {
    fontSize: 24,
    color: '#fff',
    backgroundColor: '#B862F2',
  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },
  
});