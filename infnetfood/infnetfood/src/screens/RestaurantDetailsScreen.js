import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RestaurantDetailsScreen({ route }) {
    // Recebe os detalhes do restaurante como parâmetros da rota
    const { restaurant } = route.params;

    // Exibe as informações básicas do restaurante
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Endereço:</Text>
                <Text style={styles.value}>{restaurant.address}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Item do Cardápio:</Text>
                <Text style={styles.value}>{restaurant.menuItem}</Text>
            </View>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoContainer: {
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
});