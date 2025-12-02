
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Perfil({ navigation, route }) {
  const nome = route?.params?.nome ?? 'Usuário';
  const matricula = route?.params?.matricula ?? '-';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.label}>Nome</Text>
      <Text style={styles.value}>{nome}</Text>
      <Text style={styles.label}>Matrícula</Text>
      <Text style={styles.value}>{matricula}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16, backgroundColor:'#fff' },
  title: { fontSize:18, fontWeight:'700', marginBottom:12 },
  label: { marginTop:8, color:'#666' },
  value: { fontSize:16, marginBottom:6 },
  button: { marginTop:20, backgroundColor:'#B862F2', padding:10, borderRadius:6, alignItems:'center' },
  buttonText: { color:'#fff' },
});