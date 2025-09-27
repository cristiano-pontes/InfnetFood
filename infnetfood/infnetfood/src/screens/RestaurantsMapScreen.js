import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function RestaurantsMapScreen({ navigation }) {
    // Coordenadas do Centro do Rio de Janeiro
    const rioCenter = {
        latitude: -22.9068,
        longitude: -43.1729,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    // Mock dos restaurantes (com detalhes extras)
    const restaurants = [
        {
            id: 1,
            name: 'Restaurante Aconchego',
            latitude: -22.9062,
            longitude: -43.1761,
            address: 'Rua A, 123 - Centro, Rio de Janeiro',
            menuItem: 'Feijoada Completa - R\$ 45,00',
        },
        {
            id: 2,
            name: 'Burgers do Centro',
            latitude: -22.9058,
            longitude: -43.1747,
            address: 'Rua B, 456 - Centro, Rio de Janeiro',
            menuItem: 'Cheeseburger Clássico - R\$ 32,00',
        },
        {
            id: 3,
            name: 'Pizzaria Delícia',
            latitude: -22.9072,
            longitude: -43.1739,
            address: 'Av. das Pizzas, 789 - Centro, Rio de Janeiro',
            menuItem: 'Pizza Portuguesa G - R\$ 52,00',
        },
        {
            id: 4,
            name: 'Churrascaria Gaúcha',
            latitude: -22.9075,
            longitude: -43.1725,
            address: 'Rua Churrasco, 321 - Centro, Rio de Janeiro',
            menuItem: 'Rodízio Premium - R\$ 99,00',
        },
        {
            id: 5,
            name: 'Veggie Centro',
            latitude: -22.9065,
            longitude: -43.1713,
            address: 'Av. dos Veganos, 456 - Centro, Rio de Janeiro',
            menuItem: 'Salada de Quinoa - R\$ 28,00',
        },
        {
            id: 6,
            name: 'Sushi Centro',
            latitude: -22.9052,
            longitude: -43.1769,
            address: 'Rua do Sushi, 654 - Centro, Rio de Janeiro',
            menuItem: 'Combinado Especial 20 peças - R\$ 68,00',
        },
        {
            id: 7,
            name: 'Doces da Dinda',
            latitude: -22.9048,
            longitude: -43.1751,
            address: 'Rua dos Doces, 987 - Centro, Rio de Janeiro',
            menuItem: 'Bolo de Chocolate - R\$ 18,00',
        },
        {
            id: 8,
            name: 'Restaurante Nordestino',
            latitude: -22.9063,
            longitude: -43.1782,
            address: 'Rua do Nordeste, 159 - Centro, Rio de Janeiro',
            menuItem: 'Baião de Dois - R\$ 35,00',
        },
        {
            id: 9,
            name: 'Café do Centro',
            latitude: -22.9050,
            longitude: -43.1733,
            address: 'Av. do Café, 753 - Centro, Rio de Janeiro',
            menuItem: 'Café Especial - R\$ 12,00',
        },
        {
            id: 10,
            name: 'Pasta Itália',
            latitude: -22.9045,
            longitude: -43.1740,
            address: 'Rua da Massa, 951 - Centro, Rio de Janeiro',
            menuItem: 'Spaghetti Carbonara - R\$ 47,00',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mapa de Restaurantes</Text>
            <MapView
            provider="google"
                style={styles.map}
                initialRegion={rioCenter}
                showsUserLocation={true}
            >
                {restaurants.map((restaurant) => (
                    <Marker
                        key={restaurant.id}
                        coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
                        title={restaurant.name}
                        onPress={() =>
                            navigation.navigate('RestaurantDetails', { restaurant })
                        }
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingTop: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    map: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
});