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
      <Text style={styles.label}>R$ {saldo.toFixed(2).replace('.', ',')}</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor para recarregar (ex: 10,50)"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      {/* Accordion / selector de forma de pagamento */}
      <TouchableOpacity
        style={styles.paymentHeader}
        onPress={() => setPaymentOpen(!paymentOpen)}
        activeOpacity={0.8}
      >
        <Text style={styles.paymentHeaderText}>Escolha a forma de pagamento</Text>
        <Text style={styles.paymentHeaderArrow}>{paymentOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {paymentOpen && (
        <View style={styles.paymentList}>
          {methods.map((m) => {
            const selected = paymentMethod === m.key;
            return (
              <TouchableOpacity
                key={m.key}
                style={[styles.paymentItem, selected && styles.paymentItemSelected]}
                onPress={() => setPaymentMethod(m.key)}
                activeOpacity={0.8}
              >
                <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
                  {selected && <View style={styles.checkboxDot} />}
                </View>
                <View style={styles.paymentTexts}>
                  <Text style={styles.paymentLabel}>{m.label}</Text>
                  {m.subtitle ? <Text style={styles.paymentSub}>{m.subtitle}</Text> : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleRecarregar}>
        <Text style={styles.buttonText}>Recarregar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.cancel]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  { flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff' 
    },
  label: {
    fontSize: 18,
    marginBottom: 16
     },
  input: {
    width: '90%',
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 6, 
    backgroundColor: '#F1DAFF',
    marginBottom: 12 
        },

  paymentHeader: {
    width: '90%',
    backgroundColor: '#FAF6FF',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0E6FF',
    marginBottom: 8,
  },
  paymentHeaderText: {
    fontSize: 16,
    color: '#333' 
    },
  paymentHeaderArrow: {
     color: '#666' 
    },

  paymentList: {
    width: '90%', 
    backgroundColor: '#fff',
    borderRadius: 8, 
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F0E6FF',
    marginBottom: 12
},
  paymentItem: {
     flexDirection: 'row',
      alignItems: 'center',
       paddingVertical: 10,
        paddingHorizontal: 12
     },
  
  paymentItemSelected: { backgroundColor: '#F7ECFF' },
  
  checkbox: { width: 20, 
     height: 20,
     borderRadius: 4,
     borderWidth: 1,
     borderColor: '#999',
     justifyContent: 'center',
    zalignItems: 'center',
    marginRight: 12 },
  
  checkboxSelected: { borderColor: '#6F2BD9', backgroundColor: '#6F2BD9' },
 
  checkboxDot: { width: 8, 
    height: 8, 
    backgroundColor: '#fff',
     borderRadius: 2 
    },
 
  paymentTexts: { flex: 1 },
 
  paymentLabel: { fontSize: 15,
     color: '#222' 
    },
 
  paymentSub: { fontSize: 12,
     color: '#666' 
    },

 
  button: { backgroundColor: '#B862F2',
     paddingVertical: 12, 
     paddingHorizontal: 24,
      borderRadius: 6,
       marginTop: 8 
    },
 
  cancel: { backgroundColor: '#999' },
 
  buttonText: { color: '#fff',
     fontWeight: '600' 
    },
});
