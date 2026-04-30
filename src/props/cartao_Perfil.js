import { View, Text, StyleSheet } from "react-native";

export default function CartaoPerfil({ nome, turma, matricula, n1, n2, n3 }) {
    return (
        <View style={styles.group}>
            <View style={styles.card}>
                <Text>Seu nome: <Text>{nome}</Text></Text>
                <Text>Turma: <Text>{turma}</Text></Text>
                <Text>Matrícula: <Text>{matricula}</Text></Text>
            </View>


            <View style={styles.card}>
                <Text>Olá, {n1 || nome}! Bem vindo!!</Text>
                <Text>Olá, {n2 || nome}! Bem vindo!!</Text>
                <Text>Olá, {n3 || nome}! Bem vindo!!</Text>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({

    card: {
        backgroundColor: "#FFF",
        marginHorizontal: 16,
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    button: {
        backgroundColor: '#007AFF', // Cor azul padrão
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        width: 200, // Largura fixa para manter os botões alinhados
    },

    label: { fontWeight: 'bold', color: '#333' },
    info: { fontWeight: 'normal' },
})