import React, { useContext } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/UserContext';
import { ThemeContext } from '../context/TemaContext';

export default function AbrirMenu({ visible = false, onClose }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;

  const navigation = useNavigation(); 
  const { user } = useContext(AppContext);

  const go = (route) => {
    onClose && onClose();
    navigation.navigate(route);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={themedStyles.backdrop} />
      </TouchableWithoutFeedback>

      <View style={themedStyles.menu}>
        <Text style={themedStyles.title}>Escolha</Text>

        {user && (
          <Text style={themedStyles.userInfo}>Usuário: {user.nome} | Matrícula: {user.matricula}</Text>
        )}

        <TouchableOpacity style={commonStyles.item} onPress={() => go('Historico')}>
          <Text style={themedStyles.itemText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={commonStyles.item} onPress={() => go('Perfil')}>
          <Text style={themedStyles.itemText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={commonStyles.item} onPress={() => go('Compras')}>
          <Text style={themedStyles.itemText}>Compras feitas</Text>
        </TouchableOpacity>

        <View style={commonStyles.configSection}>
          <Text style={themedStyles.configText}>Tema atual: {theme}</Text>
          <TouchableOpacity onPress={toggleTheme}>
            <Text style={themedStyles.configButton}>
              Alternar para {theme === 'light' ? 'escuro' : 'claro'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={commonStyles.close} onPress={onClose}>
          <Text style={themedStyles.closeText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

/* Estilos comuns */
const commonStyles = StyleSheet.create({
  item: { paddingVertical: 12, borderBottomColor: '#eee', borderBottomWidth: 1 },
  configSection: { marginTop: 15, alignItems: 'center' },
  close: { marginTop: 10, alignSelf: 'center', paddingVertical: 8, paddingHorizontal: 20 },
});

/* Tema claro */
const lightStyles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
  menu: {
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 8,
    borderTopWidth: 2,
    borderTopColor: '#B862F2',
  },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 12, color: '#000' },
  userInfo: { fontSize: 14, color: '#555', marginBottom: 10 },
  itemText: { fontSize: 15, color: '#222' },
  closeText: { color: '#888' },
  configText: { fontSize: 14, color: '#000', marginBottom: 8 },
  configButton: { color: 'blue', fontWeight: '600' },
});

/* Tema escuro */
const darkStyles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' },
  menu: {
    backgroundColor: '#1c1c1c',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 8,
    borderTopWidth: 2,
    borderTopColor: '#B862F2',
  },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 12, color: '#fff' },
  userInfo: { fontSize: 14, color: '#ccc', marginBottom: 10 },
  itemText: { fontSize: 15, color: '#eee' },
  closeText: { color: '#aaa' },
  configText: { fontSize: 14, color: '#fff', marginBottom: 8 },
  configButton: { color: 'orange', fontWeight: '600' },
});
