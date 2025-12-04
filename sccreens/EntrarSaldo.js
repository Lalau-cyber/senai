import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AbrirMenu from './abaDeConfiguração';

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
          <Text style={styles.configu}>⚙️</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Saldo do Ticket</Text>
        <Text style={styles.balance}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.nota}>Última atualização: agora</Text>

        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoRecarregar} onPress={() => navigation.navigate('Recarregar', { saldo })}>
            <Text style={styles.textbotoes}>Recarregar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoComprar} onPress={() => navigation.navigate('Cardapio')}>
            <Text style={styles.textbotoes}>Comprar</Text>
          </TouchableOpacity>
        </View>

      <AbrirMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
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
    marginTop: 30,  
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
  nota: {
    fontStyle: 'italic',
    marginTop: 10,
    color: '#666',
  },
  
  botaoRecarregar: {
    backgroundColor: '#B862F2',
    paddingHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 12,
    borderColor: '#000',
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  botaoComprar: {
    backgroundColor: '#B862F2',
    paddingHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 12,
    borderColor: '#000',
    borderBottomWidth: 2,
    alignItems: 'center',
    marginLeft: 20,
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
  },
  configu: {
    fontSize: 35,

  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },

   botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  
});