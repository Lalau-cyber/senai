import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { AppContext } from '../context/UserContext';

export default function Perfil() {
  const navigation = useNavigation();
  const { user} = useContext(AppContext);

  // Estado local para edição
  const [nome, setNome] = useState(user?.nome || "");
  const [email, setEmail] = useState(user?.email || "");
  const [tipo, setTipo] = useState(user?.tipo || "");

  const handleSave = () => {
    // Atualiza no contexto
    setUser({ ...user, nome, matricula });
    Alert.alert("Sucesso", "Dados atualizados com sucesso!");
  };

  const handleLogout = () => {
    // Limpa usuário do contexto
    setUser(null);
    navigation.navigate('Koado'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Matrícula:</Text>
        <Text style={styles.value}>{user?.matricula}</Text> {/* Somente leitura */}

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Tipo de Conta:</Text>
        <TextInput
          style={styles.input}
          value={tipo}
          onChangeText={setTipo}
        />
      </View>

      {/* Botão de Salvar */}
      <TouchableOpacity 
        style={styles.editButton} 
        onPress={handleSave}
      >
        <Text style={styles.editButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>

      {/* Botão de Logout */}
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Sair (Logout)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#B862F2',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 15,
    fontWeight: '500',
  },
  value: {
    fontSize: 18,
    color: '#222',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  input: {
    fontSize: 18,
    color: '#222',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  editButton: {
    backgroundColor: '#2a9d8f',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
