import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/TemaContext';

export default function Koado({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={themedStyles.container}>
      <View style={commonStyles.topBar} />
      <View style={commonStyles.centro}>
        <Text style={[commonStyles.titulo, themedStyles.text]}>Bem vindo(a)!</Text>
        <Text style={[commonStyles.texto, themedStyles.text]}>Você é aluno ou administrador?</Text>

        <View style={commonStyles.rowContainer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Aluno')} 
            style={[commonStyles.buttonWrapper, themedStyles.button]}
          >
            <Text style={[commonStyles.buttonText, themedStyles.text]}>Sou aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => navigation.navigate('Administrador')} 
            style={[commonStyles.buttonWrapper, themedStyles.button]}
          >
            <Text style={[commonStyles.buttonText, themedStyles.text]}>Sou Administrador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#000' },
  button: { borderColor: '#000' }, // borda preta no tema claro
});

const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff' },
  button: { borderColor: '#fff' }, // borda branca no tema escuro
});

const commonStyles = StyleSheet.create({
  centro: { alignItems: 'center', justifyContent: 'center' },
  rowContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  buttonText: { textAlign: 'center', fontWeight: 'bold' },
  buttonWrapper: {
    marginVertical: 10,
    borderWidth: 1,
    width: 140,
    padding: 5,
    margin: 10,
    backgroundColor: '#B862F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  titulo: { fontSize: 30, fontWeight: 'bold', margin: 15 },
  texto: { fontSize: 18 },
  topBar: { width: '100%', height: 20, backgroundColor: '#B862F2' }, // renomeado de "coner"
});
