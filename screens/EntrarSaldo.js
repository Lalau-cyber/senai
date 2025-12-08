import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AbrirMenu from './Configuracoes';
import { AppContext } from '../context/UserContext';

export default function EntrarSaldoScreen({ navigation }) {
  const { user, historico } = useContext(AppContext) || {};
  const [menuVisible, setMenuVisible] = useState(false);
  const [saldo, setSaldo] = useState(Number(user?.saldo ?? 0));

  useEffect(() => {
    setSaldo(Number(user?.saldo ?? 0));
  }, [user?.saldo]);

  return (
    <View style={styles.container}>
      <View style={styles.conter} />

      <TouchableOpacity style={styles.menu} onPress={() => setMenuVisible(true)}>
        <Text style={styles.configu}>⚙️</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.title, styles.text]}>Saldo do Ticket</Text>
        <Text style={[styles.balance, styles.text]}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>
        <Text style={[styles.note, styles.text]}>Última atualização: agora</Text>

        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={[styles.botao]}
            onPress={() => navigation.navigate('Recarregar', { saldo })}
          >
            <Text style={styles.textbotoes}>Recarregar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, { marginLeft: 12 }]}
            onPress={() => navigation.navigate('Cardapio')}
          >
            <Text style={styles.textbotoes}>Comprar</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.subtitle, styles.text]}>Histórico</Text>
        <FlatList
          data={historico || []}
          keyExtractor={(item, idx) => (item?.id ?? idx).toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={[styles.itemText, styles.text]}>{item?.descricao ?? item?.item ?? 'Item'}</Text>
              <Text style={[styles.itemSub, styles.text]}>R$ {Number(item?.valor ?? 0).toFixed(2)}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={[styles.note, styles.text]}>Nenhuma movimentação</Text>}
        />
      </View>

      <AbrirMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  text: { color: '#000' },
  conter: { 
    width: '100%', 
    height: 20, 
    backgroundColor: '#B862F2' 
  },

  menu: { 
    position: 'absolute', 
    top: 8, 
    right: 12, 
    padding: 8, 
    zIndex: 10 
  },

  configu: { 
    fontSize: 30 
  },
  content: { 
    flex: 1, 
    paddingHorizontal: 20, 
    paddingTop: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginBottom: 6 
  },
  balance: { 
    fontSize: 36, 
    fontWeight: '700',
    textAlign: 'center', 
    color: '#2a9d8f' 
  },

  note: { 
    textAlign: 'center', 
    color: '#666', 
    marginBottom: 12 
  },

  subtitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    marginTop: 16, 
    marginBottom: 8 
  },

  botoesContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginVertical: 12 
  },

  botao: { 
    backgroundColor: '#B862F2', 
    paddingHorizontal: 18, 
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: 'center' 
  },

  textbotoes: { 
    color: '#fff', 
    fontWeight: '700' 
  },

  item: { 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderColor: '#eee', 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },

  itemText: { 
    fontSize: 14 
  },

  itemSub: { 
    fontSize: 14, 
    fontWeight: '600' 
  },
  
});
