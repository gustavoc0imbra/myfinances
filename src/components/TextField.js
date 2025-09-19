import { Text, TextInput, View } from "react-native";
import styles from "../styles/main";

export default function TextField({ labelTxt, placeholder, onChangeText, keyBoardType, value, onPress, readOnly }) {
    console.log(value)
    return (
        <View>
            <Text style={[styles.textBold]}>{labelTxt}</Text>
            <TextInput
                style={[styles.inputField, { minWidth: 150 }]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType="keyBoardType"
                value={value}
                onPress={onPress}
                readOnly={readOnly}
            />
        </View>
    );
}