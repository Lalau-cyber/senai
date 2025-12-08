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

<<<<<<< HEAD
          <View style={styles.buttonWrapper}>

            <TouchableOpacity onPress={() => navigate.navigate('Aluno')} style={styles.button}>
              <Text style={styles.textoBotao}> Sou aluno</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => navigate.navigate('Administrador')} style={styles.button}>
              <Text style={styles.textoBotao}>Sou Administrador</Text>
            </TouchableOpacity>
          </View>
=======
          <TouchableOpacity 
            onPress={() => navigation.navigate('Administrador')} 
            style={[commonStyles.buttonWrapper, themedStyles.button]}
          >
            <Text style={[commonStyles.buttonText, themedStyles.text]}>Sou Administrador</Text>
          </TouchableOpacity>
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
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

<<<<<<< HEAD
  centro: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    width: 300,
=======
const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff' },
  button: { borderColor: '#fff' }, // borda branca no tema escuro
});
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795

const commonStyles = StyleSheet.create({
  centro: { alignItems: 'center', justifyContent: 'center' },
  rowContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  buttonText: { textAlign: 'center', fontWeight: 'bold' },
  buttonWrapper: {
    marginVertical: 10,
<<<<<<< HEAD
    width: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
=======
    borderWidth: 1,
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
    width: 140,
    padding: 5,
    margin: 10,
    backgroundColor: '#B862F2',
<<<<<<< HEAD
    borderBottomWidth: 2,
     padding: 10,
    borderRadius: 5,
  },
  titulo: {
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    margin: 15,
=======
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  titulo: { fontSize: 30, fontWeight: 'bold', margin: 15 },
  texto: { fontSize: 18 },
  topBar: { width: '100%', height: 20, backgroundColor: '#B862F2' }, // renomeado de "coner"
});
