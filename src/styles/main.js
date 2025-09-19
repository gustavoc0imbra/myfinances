import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        padding: 8
    },
    textSm: {
        fontSize: 24
    },
    textMd: {
        fontSize: 32
    },
    textLg: {
        fontSize: 40
    },
    textBold: {
        fontWeight: "bold"
    },
    textWhite: {
        color: "#FFF"
    },
    inputField: {
        padding: 6,
        borderWidth: 2,
        borderColor: "#DDD"
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: "#c5c5c5ff",
        borderRadius: 8,
        gap: 6
    },
    modal: {
        backgroundColor: "#FFF",
    }
});

export default styles;