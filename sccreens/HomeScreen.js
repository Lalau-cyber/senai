import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const navigate = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.coner}>
      </View>
      <View style={styles.centro}>
        <Text style={styles.titulo}>Bem vindo(a)!</Text>
        <Text style={styles.texto}>Você é aluno ou administrador?</Text>

        <View style={styles.rowContainer}>

          <View style={styles.buttonWrapper}>

            <TouchableOpacity onPress={() => navigate.navigate('Aluno')} style={styles.button}>
              <Text style={styles.buttonText}> Sou aluno</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => navigate.navigate('Administrador')} style={styles.button}>
              <Text style={styles.buttonText}>Sou Administrador</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

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
  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    width: 300,

  },
  buttonWrapper: {
    marginVertical: 10,
    width: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: 140,
    padding: 5,
    margin: 10,
    backgroundColor: '#B862F2',
  },
  titulo: {
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  texto: {
    fontFamily: 'Georgia',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  conter: {
    width: '100%',
    height: 150,
    backgroundColor: 'black',
  },
  coner: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },

});