import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    // Mock das categorias
    const categories = [
        { id: '1', name: 'Lanches' },
        { id: '2', name: 'Bebidas' },
        { id: '3', name: 'Sobremesas' },
        { id: '4', name: 'Pratos Principais' },
        { id: '5', name: 'Saladas' },
    ];

    // Renderiza cada item da lista de categorias
    const renderCategory = ({ item }) => (
        <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Products', { categoryName: item.name })}
        >
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

            {/* Lista de Categorias */}
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderCategory}
                contentContainerStyle={styles.listContainer}
            />

            {/* Botão para acessar o Perfil */}
            <TouchableOpacity style={styles.buttonProfile} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ver Perfil</Text>
            </TouchableOpacity>

            {/* Botão para acessar Meus Pedidos */}
            <TouchableOpacity style={styles.buttonOrders} onPress={() => navigation.navigate('Orders')}>
                <Text style={styles.buttonText}>Ver Meus Pedidos</Text>
            </TouchableOpacity>

            {/* Botão para acessar o Mapa de Restaurantes */}
            <TouchableOpacity style={styles.buttonMap} onPress={() => navigation.navigate('Map')}>
                <Text style={styles.buttonText}>Ver Mapa de Restaurantes</Text>
            </TouchableOpacity>

            {/* Botão para acessar as Configurações */}
            <TouchableOpacity style={styles.buttonSettings} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.buttonText}>Configurações</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    },
    categoryItem: {
        backgroundColor: '#007BFF',
        padding: 20,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
    },
    categoryText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonProfile: {
        backgroundColor: '#6c757d', 
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonOrders: {
        backgroundColor: '#FF5733', 
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonMap: {
        backgroundColor: '#28a745', 
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonSettings: {
        backgroundColor: '#007BFF', // Cor azul para o botão de Configurações
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});