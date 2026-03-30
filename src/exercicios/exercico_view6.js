import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
    return <View style={styles.container}>
        <View style={{ flexDirection: "row", gap: 7, alignItems: "flex-start" }}>
            <View style={styles.greenBox}>
            </View>
        </View>
        <View style={styles.greyBox}></View>
        <View style={{ flexDirection: "row",  alignItems: "flex-end" }}>
        <View style={styles.blueBox}></View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flex: 1,
        gap: 18,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    greenBox: {
        height: 60,
        width: 50,
        flex: 1,
        backgroundColor: "greena",

    },
    greyBox: {
        width: 50,
        backgroundColor: "grey",
        flex:1,
    },
    blueBox: {
        height: 60,
        width: 50,
        flex: 1,
    },
});

