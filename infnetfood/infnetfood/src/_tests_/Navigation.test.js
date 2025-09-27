import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';

const Stack = createStackNavigator();

describe('Testando Navegação no App', () => {
    test('Deve navegar para ProductsScreen ao clicar em uma categoria', () => {
        // Configurar a pilha de navegação
        const { getByText } = render(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Products" component={ProductsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );

        // Obter a categoria "Lanches" e pressionar
        const categoryButton = getByText('Lanches');
        fireEvent.press(categoryButton);

        // Verifique se a tela Products é mostrada
        expect(getByText('Produtos')).toBeTruthy(); // Depende do que ProductsScreen renderiza no título
    });
});