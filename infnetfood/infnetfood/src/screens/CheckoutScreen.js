import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { requestNotificationPermissions, scheduleNotification } from '../config/notificationsConfig';

export default function CheckoutScreen() {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    // Verificar permissões de notificação ao carregar a tela
    useEffect(() => {
        const checkPermissions = async () => {
            const granted = await requestNotificationPermissions();
            if (!granted) {
                Alert.alert('Permissões Negadas', 'Não foi possível ativar notificações locais.');
            }
        };
        checkPermissions();
    }, []);

    // Mock dos itens do pedido
    const cartItems = [
        { id: '1', name: 'X-Burger', quantity: 2, price: 12 },
        { id: '2', name: 'Coca-Cola', quantity: 1, price: 5 },
    ];
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    const handleFinalizeOrder = async () => {
        if (!address.trim() || !paymentMethod.trim()) {
            Alert.alert('Erro', 'Preencha todos os campos do pedido.');
            return;
        }

        // Dispare uma notificação simulada para o status do pedido
        await scheduleNotification(
            'Pedido Confirmado ✅',
            'Seu pedido foi recebido e está sendo preparado!'
        );

        Alert.alert('Pedido Finalizado', 'Uma notificação sobre o status será enviada em breve.');

        // Limpar os campos (simulando conclusão do pedido)
        setAddress('');
        setPaymentMethod('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>

            {/* Lista de Itens no Pedido */}
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.orderItem}>
                        <Text style={styles.itemText}>{item.quantity}x {item.name}</Text>
                        <Text style={styles.itemText}>R$ {(item.quantity * item.price).toFixed(2)}</Text>
                    </View>
                )}
                ListFooterComponent={
                    <Text style={styles.total}>Total: R$ {totalPrice.toFixed(2)}</Text>
                }
            />

            {/* Formulário de Endereço e Pagamento */}
            <TextInput
                style={styles.input}
                placeholder="Endereço de entrega"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Método de pagamento"
                value={paymentMethod}
                onChangeText={setPaymentMethod}
            />

            {/* Botão de Finalizar Pedido */}
            <TouchableOpacity style={styles.button} onPress={handleFinalizeOrder}>
                <Text style={styles.buttonText}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f8f8', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    orderItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    itemText: { fontSize: 16, color: '#333' },
    total: { fontSize: 18, fontWeight: 'bold', marginTop: 10, textAlign: 'right' },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
    },
    button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});