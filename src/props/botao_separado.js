import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ titulo }) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7} 
        >
            <Text style={styles.text}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        width: 200, 
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
})