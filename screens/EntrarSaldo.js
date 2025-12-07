import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AbrirMenu from './Configuracoes';
import { AppContext } from '../context/UserContext';

export default function EntrarSaldoScreen({ navigation, route }) {
  const { user, saldo, setSaldo } = useContext(AppContext);
  const saldoParam = route?.params?.saldo ?? 0;
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const novoSaldo = route?.params?.saldo;
    if (novoSaldo !== undefined && novoSaldo != null) {
      setSaldo((prev) => + Number(novoSaldo));
  }
}, [route?.params?.saldo]);

  return (
    <View style={styles.container}>
      <View style={styles.conter} />
      <View style={styles.histo}>
        <TouchableOpacity style={styles.menu} onPress={() => setMenuVisible(true)}>
          <Text style={styles.tmenu}>⚙️</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Saldo do Ticket</Text>
        {user && (
          <Text style={styles.userInfo}>
            Aluno: {user.nome} | Matrícula: {user.matricula}</Text>
        )}
        <Text style={styles.balance}>R$ {(saldo ?? 0).toFixed(2)}</Text>
        <Text style={styles.note}>Última atualização: agora</Text>

        <TouchableOpacity
          style={styles.botoes}
          onPress={() => navigation.navigate('Recarregar')}
        >
          <Text style={styles.textbotoes}>Recarregar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botoes, { marginTop: 10 }]}
          onPress={() => navigation.navigate('Cardapio')}
        >
          <Text style={styles.textbotoes}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <AbrirMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  histo: { alignItems: 'center' },
  title: {
    fontSize: 30,
    marginBottom: 12,
    fontWeight: '600',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
  },
  userInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2a9d8f',
    marginBottom: 20,
  },
  note: {
    fontStyle: 'italic',
    marginTop: 10,
    color: '#666',
    marginBottom: 30,
  },
  botoes: {
    marginTop: 20,
    backgroundColor: '#B862F2',
    paddingHorizontal: 16,
    borderRadius: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
  },
  textbotoes: { color: 'black', fontWeight: 'bold', fontSize: 14 },
  menu: {
    position: 'absolute',
    top: 8,
    right: 12,
    backgroundColor: 'transparent',
    padding: 8,
    zIndex: 10,
    borderRadius: 5,
  },
  tmenu: {
     fontSize: 24,
      color: '#fff', 
       backgroundColor: '#B862F2' 
      },
  conter: {
     width: '100%', 
     height: 20,
      backgroundColor: '#B862F2' 
    },
});
