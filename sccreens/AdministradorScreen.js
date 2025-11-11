import { View, Text, StyleSheet } from 'react-native';

export default function NaoScreen() {
  return (
    <View style={styles.container}>
      <Text>Você é o administrador?</Text>
     <TouchableOpacity style={styles.touch} onPress={()}>

     </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});