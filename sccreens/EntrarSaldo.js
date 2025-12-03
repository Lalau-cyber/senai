import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import AbrirMenu from './abrirMenu'; // Certifique-se de que este caminho está correto

// Renomeando para seguir o padrão de nomenclatura (e removendo o typo 'Scrseen' do App.js)
export default function EntrarSaldoScreen({ navigation, route }) {
    // Inicializa o saldo, garantindo que seja um número ou 0
    const saldoParam = route?.params?.saldo ?? 0;
    const [saldo, setSaldo] = useState(Number(saldoParam) || 0);
    const [menuVisible, setMenuVisible] = useState(false);

    // Efeito para atualizar o saldo sempre que um novo parâmetro for recebido
    useEffect(() => {
        const novoSaldo = route?.params?.saldo;
        if (novoSaldo !== undefined) {
            setSaldo(Number(novoSaldo));
        }
    }, [route?.params?.saldo]);

    // Função para formatar o saldo no padrão R$ X,XX
    const formatarSaldo = (valor) => {
        return `R$ ${valor.toFixed(2).replace('.', ',')}`;
    };

    return (
        // Usando SafeAreaView e configurando a cor da barra de status
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#B862F2" barStyle="light-content" />

            <View style={styles.contentContainer}>

                {/* Botão de Menu/Configurações, posicionado no canto superior direito */}
                <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
                    <Text style={styles.menuText}>Configurações</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Saldo do Ticket</Text>
                
                {/* Exibição do saldo novo*/}
                <Text style={styles.balance}>{formatarSaldo(saldo)}</Text>
                
                <Text style={styles.note}>Última atualização: agora</Text>

                {/* Botão para Recarregar */}
                <TouchableOpacity 
                    style={styles.actionButton} 
                    onPress={() => navigation.navigate('Recarregar', { saldo })}
                >
                    <Text style={styles.actionButtonText}>RECARREGAR</Text>
                </TouchableOpacity>

                {/* Botão para Cardápio (Comprar) */}
                <TouchableOpacity 
                    style={styles.actionButton} 
                    onPress={() => navigation.navigate('Cardapio')}
                >
                    <Text style={styles.actionButtonText}>COMPRAR</Text>
                </TouchableOpacity>

            </View>

            
            <AbrirMenu 
                visible={menuVisible} 
                onClose={() => setMenuVisible(false)} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        alignItems: 'center',
        // O padding top lida com o espaço da StatusBar (se necessário)
        paddingTop: 40, 
    },
    title: {
        fontSize: 24, // Tamanho ligeiramente reduzido para melhor equilíbrio
        marginBottom: 12,
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#333',
    },
    balance: {
        fontSize: 48, // Tamanho aumentado para destaque
        fontWeight: '800',
        color: '#2a9d8f', // Cor verde-água vibrante
        marginBottom: 20,
    },
    note: {
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 30, // Adicionando margem inferior antes dos botões
        color: '#666',
    },
    
    // Estilo dos Botões de Ação (Recarregar/Comprar)
    actionButton: {
        backgroundColor: '#B862F2',
        width: '80%', // Definindo uma largura padrão
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#9B50D8', // Borda sutilmente mais escura
        marginVertical: 10, // Espaçamento vertical entre os botões
        elevation: 3, // Sombra Android
        shadowColor: '#000', // Sombra iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    actionButtonText: {
        color: 'white', // Texto branco para contraste
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
=======
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  histo: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 12,
    fontWeight: '600',
    fontFamily: 'Georgia',
    fontStyle: 'italic',
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2a9d8f',
  },
  note: {
    fontStyle: 'italic',
    marginTop: 10,
    color: '#666',
  },
  botoes: {
    marginTop: 20,
    backgroundColor: '#B862F2',
    paddingHorizontal: 16,
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
    borderColor: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  menu: {
    backgroundColor: 'invisible',
    padding: 10,
    alignSelf: 'flex-end',
    borderColor: 'black',
    borderWidth: 0,
  },
  tmenu: {
    fontSize: 30,
  },
  conter: {
    width: '100%',
    height: 20,
    backgroundColor: '#B862F2',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbotoes: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
>>>>>>> 7d002b603d29c611fc9952fcc205c7821f58734e

    // Estilo do Botão de Menu (Configurações)
    menuButton: {
        position: 'absolute',
        top: 0, 
        right: 15,
        zIndex: 10,
        padding: 10,
        backgroundColor: '#B862F2',
        borderRadius: 5,
        elevation: 2,
    },
    menuText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
});