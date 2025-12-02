import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AbrirMenu({ visible = false, onClose }) {
  const navigation = useNavigation();

  const go = (route) => {
    onClose && onClose();
    navigation.navigate(route);
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.menu}>
              <Text style={styles.title}>Escolha</Text>

              <TouchableOpacity style={styles.item} onPress={() => go('Historico')}>
                <Text style={styles.itemText}>Histórico</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} onPress={() => go('Perfil')}>
                <Text style={styles.itemText}>Perfil</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} onPress={() => go('Compras')}>
                <Text style={styles.itemText}>Compras feitas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.close} onPress={onClose}>
                <Text style={styles.closeText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  menu: {
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  item: {
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 15,
    color: '#222',
  },
  close: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  closeText: {
    color: '#888',
  },
});