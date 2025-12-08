


import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// 1. Importar o UserContext (assumindo que ele está em './context/UserContext')
import { useUserContext } from '../context/UserContext'; 

// Função utilitária para formatar a moeda no padrão brasileiro
const formatCurrency = (value) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
};

// Componente para renderizar cada item da lista
const CompraItem = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.item}</Text>
        <Text style={styles.itemSub}>
            {item.date} — {formatCurrency(item.price)}
        </Text>
    </View>
);

export default function Compras({ navigation }) {
    // 2. Acessar a lista de compras e o estado de carregamento do contexto
    const { compras, isLoading } = useUserContext(); 

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Histórico de Compras</Text>
            
            {isLoading ? (
                <Text style={styles.loadingText}>Carregando histórico...</Text>
            ) : (
                <FlatList
                    // 3. Usar a lista de compras que vem do contexto
                    data={compras}
                    keyExtractor={(i) => i.id}
                    renderItem={({ item }) => <CompraItem item={item} />}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Você ainda não fez nenhuma compra.</Text>
                    }
                />
            )}

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 16,
      backgroundColor: '#fff'
     },
    title: { 
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
       color: '#333'
         },

    item: { 
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderColor: '#eee' 
      },
    itemTitle: {
       fontSize: 16, 
       fontWeight: '600'
       },
    itemSub: { color: '#666' 
    },
    button: { 
      marginTop: 20,
      backgroundColor: '#B862F2',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center' 
        },
    buttonText: { 
      color: '#fff', 
      fontWeight: 'bold' 
    },
    loadingText: { 
      textAlign: 'center', 
      paddingVertical: 30,
       color: '#888' 
      },
    emptyText: {
       textAlign: 'center', 
       paddingVertical: 30,
        color: '#A0A0A0', 
        fontStyle: 'italic' 
      
      }
});