// ...existing code...
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

export default function RecarregarScreen({ navigation, route }) {
  const saldoParam = route?.params?.saldo ?? 0;
  const [valor, setValor] = useState('');
  const saldo = Number(saldoParam) || 0;

  // novo estado para formas de pagamento / accordion
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null); // 'pix' | 'card' | 'boleto'

  const handleRecarregar = () => {
    if (!paymentMethod) {
      Alert.alert('Forma de pagamento', 'Escolha uma forma de pagamento.');
      return;
    }

    const v = parseFloat(String(valor).replace(',', '.').trim());
    if (isNaN(v) || v <= 0) {
      Alert.alert('Valor inválido', 'Informe um valor numérico maior que 0.');
      return;
    }
    const novoSaldo = Number((saldo + v).toFixed(2));
    setValor('');
    navigation.navigate('EntrarSaldo', { saldo: novoSaldo });
  };

  const methods = [
    { key: 'pix', label: 'Pix', subtitle: '' },
    { key: 'card', label: 'Cartão de Débito/Crédito', subtitle: '' },
    { key: 'boleto', label: 'Boleto', subtitle: '' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.conter}>
            </View>
      <Text style={styles.R$}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>

      <TextInput
        style={styles.recarregar}
        placeholder="Digite o valor para recarregar (ex: 10,50)"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity
        style={styles.formaPagamento}
        onPress={() => setPaymentOpen(!paymentOpen)}
        activeOpacity={0.8}
      >
        <Text style={styles.textoEscolherPagamento}>Escolha a forma de pagamento</Text>
        <Text style={styles.setinha}>{paymentOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {paymentOpen && (
        <View style={styles.tabela}>
          {methods.map((m) => {
            const selected = paymentMethod === m.key;
            return (
              <TouchableOpacity
                key={m.key}
                style={[styles.alinhar, selected && styles.selecionar]}
                onPress={() => setPaymentMethod(m.key)}
                activeOpacity={0.8}
              >
                <View style={[styles.quadrado, selected && styles.quadradoSelecionado]}>
                  {selected}
                </View>
                <View>
                  <Text style={styles.paymentLabel}>{m.label}</Text>
                  {m.subtitle ? <Text style={styles.paymentSub}>{m.subtitle}</Text> : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
      
      <View style={styles.botoesContainer}>
      <TouchableOpacity style={styles.botaoRecarregar} onPress={handleRecarregar}>
        <Text style={styles.textoBotao}>Recarregar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botaoCancelar]} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Cancelar</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

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
});
