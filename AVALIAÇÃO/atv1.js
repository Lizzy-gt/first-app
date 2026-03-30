import { StyleSheet, Text, View } from "react-native";

export default function Atividade01() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.amareloBox}>
                    <Text style={styles.textStyle}>Amarelo</Text>
                </View>
                <View style={styles.azulBox}>
                    <Text style={styles.textStyle}>Azul</Text>
                </View>


            </View>
            <View style={{ flexDirection: "row", gap: 8 }}>
                <View style={styles.verdeBox}>
                    <Text style={styles.textStyle}>Verde</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 8 }}>
                    <View style={styles.laranjaBox}> 
                        <Text style={styles.textStyle}>Laranja</Text>
                        </View>
                    <View style={styles.rosaBox}>
                        <Text style={styles.textStyle}>Rosa </Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "column", flexDirection: "row", gap: 8 }}>
                <View style={styles.vermelhoBox}>
                    <Text style={styles.textStyle}>Vermelho</Text>
                </View>
                <View style={styles.blackBox}>
                    <Text style={styles.textStyle}>Preto</Text>
                </View>
                <View style={styles.roxaBox}>
                    <Text style={styles.textStyle}>Roxo</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "colum",
        justifyContent: "space-between",
        padding: 8,
        gap: 8,
        justifyContent: "space-around"


    },

    row: {
        flexDirection: "column",
        flexDirection: "row",
        gap: 8,
    },



    textStyle: {
        color: "white",
        fontWeight: "bold",
    },


    amareloBox: {
        height: 100,
        width: 100,
        backgroundColor: "#ffbe00",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,


    },

    azulBox: {
        height: 100,
        width: 100,
        backgroundColor: "#142382",
        alignItems: "center",
        justifyContent: "center",
        flex: 3,
        gap: 8,
    },

    verdeBox: {
        height: 700,
        width: 100,
        backgroundColor: "#008c2d",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    rosaBox: {
        height: 100,
        width: 200,
        backgroundColor: "#ff005f",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    laranjaBox: {
        height: 100,
        width: 200,
        backgroundColor: "#ff5f00",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    vermelhoBox: {
        height: 90,
        width: 90,
        backgroundColor: "#e6051eed",
        gap: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    blackBox: {
        height: 90,
        width: 90,
        backgroundColor: "black",
        gap: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    roxaBox: {
        height: 90,
        width: 90,
        backgroundColor: "purple",
        gap: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },



});

