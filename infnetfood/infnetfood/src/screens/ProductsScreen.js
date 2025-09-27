import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

export default function ProductsScreen({ route }) {
    const { categoryName } = route.params;
     const products = {
        Lanches: [
            { id: '1', name: 'X-Burger', price: 12 },
            { id: '2', name: 'Hot Dog', price: 8 },
            { id: '3', name: 'Misto Quente', price: 10 },
        ],
        Bebidas: [
            { id: '4', name: 'Coca-Cola', price: 5 },
            { id: '5', name: 'Suco de Laranja', price: 7 },
            { id: '6', name: 'Água Mineral', price: 3.5 },
        ],
        Sobremesas: [
            { id: '7', name: 'Bolo de Chocolate', price: 14 },
            { id: '8', name: 'Sorvete', price: 8.5 },
            { id: '9', name: 'Pudim', price: 10 },
        ],
        Pratos_Principais: [
            { id: '10', name: 'Empadão de Frango', price: 35 },
            { id: '11', name: 'Lasanha', price: 42.5 },
            { id: '12', name: 'Salmão', price: 79 },
        ],
        Saladas: [
            { id: '13', name: 'Ceasar', price: 27 },
            { id: '14', name: 'Caprese', price: 30.5 },
            { id: '15', name: 'Ranch', price: 35 },
        ],
    };
const formattedCategoryName = categoryName.replace(' ', '_');
    const categoryProducts = products[formattedCategoryName] || [];
    const [cartItems, setCartItems] = useState([]); // Carrinho
    const animatedValue = useRef(new Animated.Value(1)).current; // Para animação

    // Adiciona o produto ao carrinho com animação
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);

        // Inicia animação
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 1.5, // Aumenta o tamanho momentaneamente
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
                toValue: 1, // Volta ao tamanho normal
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const renderProduct = ({ item }) => (
        <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>R\$ {item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );

     const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.cartItemText}>
                {item.quantity}x {item.name} - R$ {(item.price * item.quantity).toFixed(2)}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Produtos</Text>

            {/* Carrinho com Animação */}
            <Animated.View style={[styles.cartBox, { transform: [{ scale: animatedValue }] }]}>
                <Text style={styles.cartText}>Itens no Carrinho: {cartItems.length}</Text>
            </Animated.View>

             <FlatList
                data={categoryProducts}
                keyExtractor={(item) => item.id}
                renderItem={renderProduct}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    cartBox: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    cartText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    productItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    productName: {
        fontSize: 16,
        color: '#333',
    },
    productPrice: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});