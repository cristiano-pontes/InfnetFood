import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

// Mock de navegação
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: () => ({
            navigate: mockNavigate,
        }),
    };
});

describe('HomeScreen', () => {
    test('Deve exibir a lista de categorias corretamente', () => {
        const { getByText } = render(<HomeScreen navigation={{ navigate: mockNavigate }} />);

        // Espera-se que as categorias sejam exibidas
        expect(getByText('Lanches')).toBeTruthy();
        expect(getByText('Bebidas')).toBeTruthy();
        expect(getByText('Sobremesas')).toBeTruthy();
        expect(getByText('Pratos Principais')).toBeTruthy();
        expect(getByText('Saladas')).toBeTruthy();
    });

    test('Deve navegar para a tela de produtos ao clicar em uma categoria', () => {
        const { getByText } = render(<HomeScreen navigation={{ navigate: mockNavigate }} />);

        // Obter a categoria "Lanches"
        const categoryButton = getByText('Lanches');

        // Simular clique na categoria
        fireEvent.press(categoryButton);

        // Verificar se a navegação foi chamada com os parâmetros corretos
        expect(mockNavigate).toHaveBeenCalledWith('Products', { categoryName: 'Lanches' });
    });
});