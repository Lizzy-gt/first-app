import { StyleSheet, Text, View } from "react-native";

export default function Atividade02() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textStyle}>Header</Text>
            </View>
            <View style={styles.side}>
                <Text style={styles.textStyle}>side</Text>
            </View>
            <View style={styles.verde}>
                <Text style={styles.textStyle}>verde</Text>
            </View>
            <View style={styles.rosa}>
                <Text style={styles.textStyle}>Rosa</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({


    container:{
        padding: 8,
        gap: 8,
        alignItems: "center",
        flex: 1,
        flexDirection: "row"
        
    },
    
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },


    header: {
        height: 60,
        width: 60,
        backgroundColor: "#4b4686",
        alignItems: "center",
        justifyContent: "center",
        flex : 1,

    },

    side: {
        height: 100,
        width: 100,
        backgroundColor: "#949494",
        alignItems: "center",
        justifyContent: "center",
    },

    verde: {
        height: 700,
        width: 100,
        backgroundColor: "#008c2d",
        alignItems: "center",
        justifyContent: "center",
    },

    rosa: {
        height: 100,
        width: 200,
        backgroundColor: "#ff005f",
        alignItems: "center",
        justifyContent: "center",
    },

    laranjaBox: {
        height: 100,
        width: 200,
        backgroundColor: "#ff5f00",
        alignItems: "center",
        justifyContent: "center",
    },

    vermelhoBox: {
        height: 90,
        width: 90,
        backgroundColor: "#e6051eed",
        alignItems: "center",
        justifyContent: "center",
    },

    blackBox: {
        height: 90,
        width: 90,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },

    roxaBox: {
        height: 90,
        width: 90,
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center",
    },



});

