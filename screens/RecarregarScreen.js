import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { AppContext } from '../context/UserContext';
import { ThemeContext } from '../context/TemaContext';

export default function RecarregarScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = theme === 'dark' ? darkStyles : lightStyles;
  const [valor, setValor] = useState('');
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const { user, recargaSaldo } = useContext(AppContext);

  const handleRecarregar = () => {
    const v = parseFloat(String(valor).replace(',', '.').trim());

    if (isNaN(v) || v <= 0) {
      Alert.alert('Valor inválido', 'Informe um valor numérico maior que 0.');
      return;
    }
if (!paymentMethod) {
      Alert.alert('Forma de pagamento', 'Escolha uma forma de pagamento antes de recarregar.');
      return;
    }
    
    recargaSaldo(v);
    setValor('');
    Alert.alert('Recarga realizada', `Você recarregou R$ ${v.toFixed(2).replace('.', ',')}`);
    navigation.navigate('EntrarSaldo');
  };

  const methods = [
    { key: 'pix', label: 'Pix' },
    { key: 'card', label: 'Cartão de Débito/Crédito' },
    { key: 'boleto', label: 'Boleto' },
  ];

  return (
    <View style = {themedStyles.container}>
    <View style={commonStyles.container}>
      <View style={commonStyles.conter} />
      {/* ✅ mostra saldo do user */}
      <Text style={commonStyles.R$}>R$ {(user.saldo ?? 0).toFixed(2).replace('.', ',')}</Text>

      <TextInput
        style={commonStyles.recarregar}
        placeholder="Digite o valor para recarregar (ex: 10,50)"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity
        style={commonStyles.formaPagamento}
        onPress={() => setPaymentOpen(!paymentOpen)}
        activeOpacity={0.8}
      >
        <Text style={commonStyles.textoEscolherPagamento}>Escolha a forma de pagamento</Text>
        <Text style={commonStyles.setinha}>{paymentOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {paymentOpen && (
        <View style={commonStyles.tabela}>
          {methods.map((m) => {
            const selected = paymentMethod === m.key;
            return (
              <TouchableOpacity
                key={m.key}
                style={[commonStyles.alinhar, selected && commonStyles.selecionar]}
                onPress={() => setPaymentMethod(m.key)}
                activeOpacity={0.8}
              >
                <View style={[commonStyles.quadrado, selected && commonStyles.quadradoSelecionado]} />
                <View>
                  <Text style={commonStyles.paymentLabel}>{m.label}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
<<<<<<< HEAD
      
      <View style={styles.botoesContainer}>
      <TouchableOpacity style={styles.botaoRecarregar} onPress={handleRecarregar}>
        <Text style={styles.textoBotao}>Recarregar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botaoCancelar]} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Cancelar</Text>
      </TouchableOpacity>
=======

      <View style={commonStyles.botoesContainer}>
        <TouchableOpacity style={commonStyles.botaoRecarregar} onPress={handleRecarregar}>
          <Text style={commonStyles.recarregarTexto}>Recarregar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={commonStyles.botaoCancelar} onPress={() => navigation.goBack()}>
          <Text style={commonStyles.cancelarTexto}>Cancelar</Text>
        </TouchableOpacity>
      </View>
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
    </View>
    </View>
  );
}
<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  R$: {
    marginTop: 32,
    marginBottom: 32,
    fontSize: 36,
    fontWeight: '700',
    color: '#2a9d8f',
  },

  recarregar: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#F1DAFF',
    marginBottom: 12
  },

  formaPagamento: {
    width: '90%',
    backgroundColor: '#F1DAFF',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  paymentHeaderText: {
    fontSize: 16,
    color: '#333'
  },
  setinha: {
    color: '#B862F2'
  },

  tabela: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F0E6FF',
    marginBottom: 12
  },
  alinhar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12
  },

  selecionar:{ 
    backgroundColor: '#F0E6FF' },

  quadrado: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#999',
    justifyContent: 'center',
    zalignItems: 'center',
    marginRight: 12
  },

  quadradoSelecionado: {
    borderColor: '#6F2BD9', 
    backgroundColor: '#6F2BD9' 
  },
  paymentLabel: {
    fontSize: 15,
    color: '#222'
  },

  paymentSub: {
    fontSize: 12,
    color: '#666'
  },
  
  botaoRecarregar: {
    backgroundColor: '#B862F2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 8,
    color: 'black',
    marginRight: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  botaoCancelar: {
    backgroundColor: '#db0921',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 8,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    
    
  },

  textoBotao: {
    color: '#000000ff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },

  textoEscolherPagamento: {
    fontSize: 14,
    color: 'black'
  },

  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
=======
const lightStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#000' },
});

const darkStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff' },
});
const commonStyles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
  R$: { marginTop: 32, marginBottom: 32, fontSize: 36, fontWeight: '700', color: '#2a9d8f' },
  recarregar: {
    width: '90%', height: 50, borderWidth: 1, borderColor: '#ccc',
    paddingHorizontal: 10, borderRadius: 6, backgroundColor: '#F1DAFF', marginBottom: 12
  },
  formaPagamento: {
    width: '90%', backgroundColor: '#F1DAFF', paddingHorizontal: 12, paddingVertical: 12,
    borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', borderWidth: 1, borderColor: '#ccc', marginBottom: 8,
  },
  setinha: { color: '#B862F2' },
  tabela: {
    width: '90%', backgroundColor: '#fff', borderRadius: 8, paddingVertical: 8,
    borderWidth: 1, borderColor: '#F0E6FF', marginBottom: 12
  },
  alinhar: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 12 },
  selecionar: { backgroundColor: '#F0E6FF' },
  quadrado: { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: '#999', marginRight: 12 },
  quadradoSelecionado: { borderColor: '#6F2BD9', backgroundColor: '#6F2BD9' },
  paymentLabel: { fontSize: 15, color: '#222' },
  botaoRecarregar: {
    backgroundColor: '#B862F2', paddingVertical: 12, paddingHorizontal: 24,
    borderRadius: 6, marginTop: 8, marginRight: 10, borderBottomColor: 'black', borderBottomWidth: 2,
  },
  botaoCancelar: {
    backgroundColor: '#db0921', paddingVertical: 12, paddingHorizontal: 24,
    borderRadius: 6, marginTop: 8, borderBottomColor: 'black', borderBottomWidth: 2,
  },
  conter: { width: '100%', height: 20, backgroundColor: '#B862F2' },
  textoEscolherPagamento: { fontSize: 14, color: 'black' },
  botoesContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  recarregarTexto: { color: 'black', fontWeight: 'bold' },
  cancelarTexto: { color: 'white', fontWeight: 'bold' },
>>>>>>> d7fcd81e831e1ba7fc2ab9e21c1b743170c1a795
});
