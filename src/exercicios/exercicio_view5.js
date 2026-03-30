import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
    return <View style={styles.container}>
        <View style={{ flexDirection: "row", gap:8 }}>
            <View style={styles.blueBox}>
                <Text style={styles.textStyle}>Coluna 1</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.textStyle}>Coluna 2</Text>

            </View>

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

    greenBox: {
        height: 900,
        width: 200,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        height: 900,
        width: 200,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});

BorderRadius