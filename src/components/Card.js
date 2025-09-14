import { Text, View } from "react-native";
import styles from "../styles/main";

export default function Card({ title, content, status }) {
    return (
        <View style={[styles.card]}>
            <View style={{ width: "100%", gap: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ width: 25, height: 25, borderRadius: 50, backgroundColor: status ? "#28aa0eff" : "#e02323ff" }}></View>                
                <Text style={styles.textMd}>{title}</Text>
            </View>
            <Text style={styles.textSm}>{content}</Text>
            <Text style={{ fontSize: 16 }}>Status: {status ? "Paga" : "Pendente"}</Text>
        </View>
    );
}