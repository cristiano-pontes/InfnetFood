import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity
} from 'react-native';

export default function SettingsScreen() {
    // Estado para gerenciar o tema (claro ou escuro)
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    // Cores dinâmicas baseadas no tema
    const colors = isDarkTheme
        ? {
              background: '#333',
              text: '#fff',
              switchTrack: '#767577',
              switchThumb: '#f4f3f4',
              buttonBackground: '#444',
          }
        : {
              background: '#f8f8f8',
              text: '#333',
              switchTrack: '#ddd',
              switchThumb: '#007BFF',
              buttonBackground: '#fff',
          };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>
                Configurações
            </Text>

            {/* Alternância entre Tema */}
            <View style={styles.switchContainer}>
                <Text style={[styles.switchLabel, { color: colors.text }]}>
                    Tema Escuro
                </Text>
                <Switch
                    value={isDarkTheme}
                    onValueChange={toggleTheme}
                    trackColor={{
                        false: colors.switchTrack,
                        true: colors.switchTrack,
                    }}
                    thumbColor={isDarkTheme ? colors.switchThumb : colors.switchThumb}
                />
            </View>

            {/* Botão Simples (Apenas Mostrando as Cores Associadas ao Tema) */}
            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: colors.buttonBackground },
                ]}
            >
                <Text style={[styles.buttonText, { color: colors.text }]}>
                    Simulação de Botão
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    switchLabel: {
        fontSize: 18,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});