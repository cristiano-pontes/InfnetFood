import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ProfileScreen({ navigation, route }) {
    const { onLogout } = route.params; // Recebe a função de logout

    // Lida com a ação de Logout
    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Você tem certeza que deseja sair?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Sair', onPress: () => onLogout() },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>

            {/* Detalhes mockados do usuário */}
            <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Nome:</Text>
                <Text style={styles.infoValue}>João Silva</Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>E-mail:</Text>
                <Text style={styles.infoValue}>joao.silva@email.com</Text>
            </View>

            {/* Botão de Logout */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    infoBox: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 5,
    },
    infoValue: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        backgroundColor: '#FF5733',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    logoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});