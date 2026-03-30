import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
    return <View style={styles.container}>
        <View style={styles.yellowBox}>
            <Text style={styles.textStyle}>Amarelo</Text>
        </View>

    </View>;
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 18,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    yellowBox: {
        height: 120,
        width: 120,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
});

