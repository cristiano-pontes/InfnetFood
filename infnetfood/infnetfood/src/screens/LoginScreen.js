import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ onLogin }) {
    // Estado dos campos de login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Mock de credenciais
    const mockUser = {
        email: 'user@email.com',
        password: '123456',
    };

    const handleLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos!');
            return;
        }

        // Simula a autenticação
        if (email === mockUser.email && password === mockUser.password) {
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
            onLogin(); // Chama a função responsável por alterar o estado "isLoggedIn"
        } else {
            Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo(a)!</Text>
            <Text style={styles.subtitle}>Faça login para continuar</Text>

            {/* Campo de Email */}
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            {/* Campo de Senha */}
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Botão de Login */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});