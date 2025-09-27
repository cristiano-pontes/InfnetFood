import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import RestaurantsMapScreen from './src/screens/RestaurantsMapScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const PublicStack = createStackNavigator();
const PrivateStack = createStackNavigator();

export default function App() {
    // Gerenciar o estado de autenticação
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Função de logout
    const onLogout = () => {
        setIsLoggedIn(false);
    };

    // Pilha de navegação para usuários não autenticados (área pública)
    const PublicNavigator = () => (
        <PublicStack.Navigator>
            <PublicStack.Screen
                name="Login"
                component={(props) => <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />}
                options={{ headerShown: false }}
            />
        </PublicStack.Navigator>
    );

    // Pilha de navegação para usuários autenticados (área privada)
    const PrivateNavigator = () => (
        <PrivateStack.Navigator>
            <PrivateStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Início' }}
            />
            <PrivateStack.Screen
                name="Products"
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.categoryName || 'Produtos',
                })}
            />
            <PrivateStack.Screen
                name="Profile"
                component={(props) => (
                    <ProfileScreen {...props} route={{ params: { onLogout } }} />
                )}
                options={{ title: 'Perfil' }}
            />
            <PrivateStack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{ title: 'Meus Pedidos' }}
            />
            <PrivateStack.Screen
                name="Map"
                component={RestaurantsMapScreen}
                options={{ title: 'Mapa de Restaurantes' }}
            />
            <PrivateStack.Screen
                name="RestaurantDetails"
                component={RestaurantDetailsScreen}
                options={{ title: 'Detalhes do Restaurante' }}
            />
            <PrivateStack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ title: 'Checkout' }}
            />
            <PrivateStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Configurações' }}
            />
        </PrivateStack.Navigator>
    );

    return (
        <NavigationContainer>
            {isLoggedIn ? <PrivateNavigator /> : <PublicNavigator />}
        </NavigationContainer>
    );
}