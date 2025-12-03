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
          <Text style={styles.tmenu}>Configurações</Text>
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
<<<<<<< HEAD
<<<<<<< HEAD
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        alignItems: 'center',
        // O padding top lida com o espaço da StatusBar (se necessário)
        paddingTop: 40, 
    },
    title: {
        fontSize: 24, // Tamanho ligeiramente reduzido para melhor equilíbrio
        marginBottom: 12,
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#333',
    },
    balance: {
        fontSize: 48, // Tamanho aumentado para destaque
        fontWeight: '800',
        color: '#2a9d8f', // Cor verde-água vibrante
        marginBottom: 20,
    },
    note: {
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 30, // Adicionando margem inferior antes dos botões
        color: '#666',
    },
    
    // Estilo dos Botões de Ação (Recarregar/Comprar)
    actionButton: {
        backgroundColor: '#B862F2',
        width: '80%', // Definindo uma largura padrão
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#9B50D8', // Borda sutilmente mais escura
        marginVertical: 10, // Espaçamento vertical entre os botões
        elevation: 3, // Sombra Android
        shadowColor: '#000', // Sombra iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    actionButtonText: {
        color: 'white', // Texto branco para contraste
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

=======
>>>>>>> 1357d49201ee47a20cc80667646d2ed806325c9c
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