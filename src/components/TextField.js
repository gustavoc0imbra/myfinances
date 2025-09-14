import { Text, TextInput, View } from "react-native";
import styles from "../styles/main";

export default function TextField({ labelTxt, placeholder, onChangeText, keyBoardType }) {
    return (
        <View>
            <Text style={[styles.textBold]}>{labelTxt}</Text>
            <TextInput
                style={[styles.inputField, { minWidth: 150 }]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType="keyBoardType"
            />
        </View>
    );
}