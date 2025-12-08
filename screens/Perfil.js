import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Alert, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native'; 
import { AppContext } from '../context/UserContext';
import { ThemeContext } from '../context/TemaContext';

export default function Perfil() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  // ✅ agora usamos themedStyles para tema claro/escuro
  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;

  // Estado local para edição
  const [nome, setNome] = useState(user?.nome || "");
  const [email, setEmail] = useState(user?.email || "");
  const [turma, setTurma] = useState(user?.turma || "");
  const [foto, setFoto] = useState(user?.foto || null);

  // Função para escolher imagem
  const escolherFoto = () => {
    const options = { mediaType: 'photo', quality: 1 };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert("Erro", response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        setFoto(response.assets[0].uri);
      }
    });
  };

  const handleSave = () => {
    if (!user) return;
    // ✅ salva nome também
    setUser({ ...user, nome, email, turma, foto });
    Alert.alert("Sucesso", "Dados atualizados com sucesso!");
  };

  return (
    <View style={themedStyles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Meu Perfil</Text>
        </View>

        <View style={styles.infoContainer}>
          {/* Foto de perfil */}
          <TouchableOpacity onPress={escolherFoto}>
            {foto ? (
              <Image source={{ uri: foto }} style={styles.foto} />
            ) : (
              <View style={styles.fotoPlaceholder}>
                <Text style={{ color: '#666' }}>Selecionar Foto</Text>
              </View>
            )}
          </TouchableOpacity>

          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Matrícula:</Text>
          <Text style={styles.value}>{user?.matricula}</Text> {/* somente leitura */}

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Turma:</Text>
          <TextInput
            style={styles.input}
            value={turma}
            onChangeText={setTurma}
          />
        </View>

        {/* Botão de salvar */}
        <TouchableOpacity style={styles.editButton} onPress={handleSave}>
          <Text style={styles.editButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

// Estilos de tema
const lightStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
});

// Estilos fixos da tela
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#B862F2',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  infoContainer: { paddingHorizontal: 20, marginBottom: 30 },
  label: { fontSize: 14, color: '#666', marginTop: 15, fontWeight: '500' },
  value: {
    fontSize: 18, color: '#222', borderBottomWidth: 1,
    borderBottomColor: '#eee', paddingBottom: 5,
  },
  input: {
    fontSize: 18, color: '#222', borderBottomWidth: 1,
    borderBottomColor: '#ccc', paddingBottom: 5,
  },
  foto: {
    width: 120, height: 120, borderRadius: 60,
    alignSelf: 'center', marginBottom: 20,
  },
  fotoPlaceholder: {
    width: 120, height: 120, borderRadius: 60,
    backgroundColor: '#eee', alignSelf: 'center',
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#2a9d8f', padding: 15, borderRadius: 8,
    marginHorizontal: 20, marginBottom: 10, alignItems: 'center',
  },
  editButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
