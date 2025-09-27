import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function OrdersScreen({ navigation }) {
    // Mock dos pedidos para exibição
    const orders = [
        {
            id: '001',
            description: 'Pedido 001 - X-Burger, Coca-Cola, Bolo de Chocolate',
            status: 'Em andamento',
            total: 'R\$ 34,50',
        },
        {
            id: '002',
            description: 'Pedido 002 - Lasanha, Água Mineral',
            status: 'Entregue',
            total: 'R\$ 45,50',
        },
        {
            id: '003',
            description: 'Pedido 003 - Ceasar Salad, Suco de Laranja',
            status: 'Cancelado',
            total: 'R\$ 35,00',
        },
    ];

    // Renderiza cada pedido na lista
    const renderOrder = ({ item }) => (
        <View style={styles.orderItem}>
            <Text style={styles.orderId}>📦 ID: {item.id}</Text>
            <Text style={styles.orderDescription}>{item.description}</Text>
            <Text style={styles.orderStatus}>Status: {item.status}</Text>
            <Text style={styles.orderTotal}>Total: {item.total}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus Pedidos</Text>

            {/* Lista de pedidos */}
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={renderOrder}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={<Text style={styles.emptyText}>Você ainda não fez nenhum pedido.</Text>}
            />

            {/* Botão para navegar para o Checkout */}
            <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
                <Text style={styles.checkoutButtonText}>Ir para o Checkout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    },
    orderItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
    },
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    orderDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    orderStatus: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 5,
    },
    orderTotal: {
        fontSize: 14,
        color: '#333',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#555',
        marginTop: 50,
    },
    checkoutButton: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    checkoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});