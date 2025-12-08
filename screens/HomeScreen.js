import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Koado({ navigation }) {
  return (
    <View style={[styles.container, commonStyles.container]}>
      <View style={commonStyles.topBar} />
      <View style={commonStyles.centro}>
        <Text style={[commonStyles.titulo, styles.text]}>Bem vindo(a)!</Text>
        <Text style={[commonStyles.texto, styles.text]}>Você é aluno ou administrador?</Text>

        <View style={commonStyles.rowContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Aluno')}
            style={[commonStyles.buttonWrapper, styles.button]}
          >
            <Text style={[commonStyles.buttonText, styles.text]}>Sou aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Administrador')}
            style={[commonStyles.buttonWrapper, styles.button]}
          >
            <Text style={[commonStyles.buttonText, styles.text]}>Sou Administrador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#000' },
  button: { borderColor: '#000' },
});

const commonStyles = StyleSheet.create({
  container: { flex: 1 },
  centro: { alignItems: 'center', justifyContent: 'center' },
  rowContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  buttonText: { textAlign: 'center', fontWeight: 'bold' },
  buttonWrapper: {
    marginVertical: 10,
    borderWidth: 1,
    width: 140,
    padding: 10,
    margin: 10,
    backgroundColor: '#B862F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  titulo: { fontSize: 30, fontWeight: 'bold', margin: 15 },
  texto: { fontSize: 18 },
  topBar: { width: '100%', height: 20, backgroundColor: '#B862F2' },
});
