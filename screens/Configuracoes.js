import React, { useContext } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/UserContext';

export default function AbrirMenu({ visible = false, onClose }) {
  const navigation = useNavigation(); 
  const { user } = useContext(AppContext);

  const go = (route) => {
    onClose && onClose();
    navigation.navigate(route);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <View style={styles.menu}>
        <Text style={styles.title}>Escolha</Text>

        {user && (
          <Text style={styles.userInfo}>Usuário: {user.nome} | Matrícula: {user.matricula}</Text>
        )}

        <TouchableOpacity style={commonStyles.item} onPress={() => go('Historico')}>
          <Text style={styles.itemText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={commonStyles.item} onPress={() => go('Perfil')}>
          <Text style={styles.itemText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={commonStyles.item} onPress={() => go('Compras')}>
          <Text style={styles.itemText}>Compras feitas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={commonStyles.close} onPress={onClose}>
          <Text style={styles.closeText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

/* Estilos comuns */
const commonStyles = StyleSheet.create({
  item: { paddingVertical: 12, borderBottomColor: '#eee', borderBottomWidth: 1 },
  close: { marginTop: 10, alignSelf: 'center', paddingVertical: 8, paddingHorizontal: 20 },
});

/* Estilos */
const styles = StyleSheet.create({
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
});
