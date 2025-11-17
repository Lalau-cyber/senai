import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AlunoScreen from './AlunoScreen';
import AdministradorsScreen from './AdministradorScreen';

export default function HomeScreen({ navigation }) {
    return (
      
    <View style={styles.rowContainer}>
    <View style={styles.buttonWrapper}>
       <TouchableOpacity onPress={()=> AlunoScreen() } style={styles.button}>
           <Text style={styles.buttonText}>aluno</Text>
      </TouchableOpacity>
    </View>

    <View>
         <Text>ou</Text>
    </View>

   <View style={styles.buttonWrapper}>
       <TouchableOpacity onPress={() => AdministradorsScreen()} style={styles.button}>
          <Text style={styles.buttonText}>Administrador</Text>
      </TouchableOpacity>
    </View>
    </View>
      
    );
  };
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 50,
    padding: 5,
    margin: 5,
  },
});