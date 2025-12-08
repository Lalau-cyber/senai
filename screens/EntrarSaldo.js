<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AbrirMenu from './abaDeConfiguração';
=======
import { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AbrirMenu from './Configuracoes';
import { AppContext } from '../context/UserContext';
import { ThemeContext } from '../context/TemaContext';
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795

export default function EntrarSaldoScreen({ navigation }) {
  const { user, historico } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;
  const [menuVisible, setMenuVisible] = useState(false);

  return (
<<<<<<< HEAD
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
=======
    <View style={themedStyles.container}>
      <View style={commonStyles.container}>
        <View style={commonStyles.conter} />
        <View style={commonStyles.histo}>
          {/* Botão de configurações */}
          <TouchableOpacity style={commonStyles.menu} onPress={() => setMenuVisible(true)}>
            <Text style={commonStyles.tmenu}>⚙️</Text>
          </TouchableOpacity>

          {/* Informações do aluno */}
          <Text style={[commonStyles.title, themedStyles.text]}>Saldo do Ticket</Text>
          {user && (
            <Text style={[commonStyles.userInfo, themedStyles.text]}>
              Aluno: {user.nome} | Matrícula: {user.matricula}
            </Text>
          )}
          <Text style={commonStyles.balance}>R$ {(user?.saldo ?? 0).toFixed(2)}</Text>
          <Text style={[commonStyles.note, themedStyles.text]}>Última atualização: agora</Text>

          {/* Botões de ação */}
          <TouchableOpacity
            style={[commonStyles.botaoBase, themedStyles.botao]}
            onPress={() => navigation.navigate('Recarregar')}
          >
            <Text style={commonStyles.textbotoes}>Recarregar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[commonStyles.botaoBase, themedStyles.botao, { marginTop: 10 }]}
            onPress={() => navigation.navigate('Cardapio')}
          >
            <Text style={commonStyles.textbotoes}>Comprar</Text>
          </TouchableOpacity>

          {/* Histórico de transações */}
          <Text style={[commonStyles.title, themedStyles.text, { fontSize: 22, marginTop: 20 }]}>
            Histórico
          </Text>
          <FlatList
            data={historico}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={commonStyles.item}>
                <Text style={themedStyles.text}>{item.data} - {item.item}</Text>
                <Text style={{ color: item.valor > 0 ? 'green' : 'red' }}>
                  R$ {item.valor.toFixed(2)}
                </Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={[commonStyles.note, themedStyles.text]}>Nenhuma transação encontrada.</Text>
            }
          />
        </View>

        {/* Menu lateral */}
        <AbrirMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
      </View>
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
    </View>
    </View>
  );
}

/* Tema claro */
const lightStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center' },
  text: { color: '#000' },
  botao: { backgroundColor: '#B862F2', borderColor: '#000' },
});

/* Tema escuro */
const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center' },
  text: { color: '#fff' },
  botao: { backgroundColor: '#7A2BBF', borderColor: '#fff' },
});

/* Estilos comuns */
const commonStyles = StyleSheet.create({
  container: { flex: 1 },
  histo: { alignItems: 'center' },
  title: {
    marginTop: 30,  
    fontSize: 30,
    marginBottom: 12,
    fontWeight: '600',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
  },
<<<<<<< HEAD
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
=======
  userInfo: { fontSize: 14, marginBottom: 8 },
  balance: { fontSize: 36, fontWeight: '700', color: '#2a9d8f', marginBottom: 20 },
  note: { fontStyle: 'italic', marginTop: 10, marginBottom: 30 },
  botaoBase: {
    marginTop: 20,
    paddingHorizontal: 16,
    borderRadius: 5,
    paddingVertical: 10,
    borderWidth: 1,
    flexDirection: 'row',
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
  },
  textbotoes: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  menu: {
    position: 'absolute',
    top: 8,
    right: 12,
    backgroundColor: 'transparent',
    padding: 8,
    zIndex: 10,
    borderRadius: 5,
  },
<<<<<<< HEAD
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
=======
  tmenu: { fontSize: 24, color: '#fff', backgroundColor: '#B862F2' },
  conter: { width: '100%', height: 20, backgroundColor: '#B862F2' },
  item: { flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginVertical: 5 },
});
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
