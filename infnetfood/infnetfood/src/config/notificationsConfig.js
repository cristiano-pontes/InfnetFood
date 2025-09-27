import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configuração do comportamento das notificações (Ex: Som, apresentação, etc)
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true, // Exibir notificação como alerta
        shouldPlaySound: true, // Tocar som
        shouldSetBadge: true, // Exibir badges (ícones de notificação no app)
    }),
});

// Função para solicitar permissões de notificação
export const requestNotificationPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
        return false; // Usuário negou as permissões
    }
    return true; // Permissão concedida
};

// Função para agendar uma notificação
export const scheduleNotification = async (title, body, delay = 5) => {
    return await Notifications.scheduleNotificationAsync({
        content: { title, body }, // Conteúdo da notificação
        trigger: { seconds: delay }, // Quando exibir (5 segundos por padrão)
    });
};