

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// useNavigation é opcional aqui, mas pode ser útil para o botão Voltar ou Logout
import { useNavigation } from '@react-navigation/native'; 

export default function Perfil() {
    const navigation = useNavigation();

    // Dados de exemplo (em um aplicativo real, viriam do seu UserContext)
    const userData = {
        nome: "João da Silva",
        matricula: "20230042",
        email: "joao.silva@escola.com",
        tipo: "Aluno",
    };

    const handleLogout = () => {
        // Ação de Logout: 
        // 1. Limpar o estado do usuário no AppContext
        // 2. Navegar para a tela de login/inicial (Koado)
        alert('Está ação é funcionalidade do seu administrador"');
        navigation.navigate('Koado'); 
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Meu Perfil</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{userData.nome}</Text>

                <Text style={styles.label}>Matrícula:</Text>
                <Text style={styles.value}>{userData.matricula}</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{userData.email}</Text>

                <Text style={styles.label}>Tipo de Conta:</Text>
                <Text style={styles.value}>{userData.tipo}</Text>
            </View>

            {/* Botão de Edição */}
            <TouchableOpacity 
                style={styles.editButton} 
                onPress={(navigation.goBack)}
            >
                <Text style={styles.editButtonText}>Editar Dados</Text>
            </TouchableOpacity>

            {/* Botão de Logout */}
            <TouchableOpacity 
                style={styles.logoutButton} 
                onPress={handleLogout}
            >
                <Text style={styles.logoutButtonText}>Sair (Logout)</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#B862F2', // Sua cor primária
        padding: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    infoContainer: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginTop: 15,
        fontWeight: '500',
    },
    value: {
        fontSize: 18,
        color: '#222',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    editButton: {
        backgroundColor: '#2a9d8f', // Cor para Recarga/Ação Positiva
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#f44336', // Vermelho para Ação Perigosa/Sair
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});