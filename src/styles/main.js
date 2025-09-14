import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
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
    inputField: {
        padding: 6,
        borderWidth: 2,
        borderColor: "#DDD"
    },
});

export default styles;