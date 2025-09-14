import { useState } from "react";
import { View, Button, Text, Alert } from "react-native";
import TextField from "../components/TextField";
import styles from "../styles/main";

export default function HomeScreen({ navigation }) {
    const [user, setUser] = useState("");

    const goToDash = () => {
        if(user.trim().length === 0) {
            Alert.alert("Atenção", "Favor digitar seu nome para continuar!");
            return;
        }

        navigation.navigate();
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textLg]}>Bem-vindo(a)!</Text>
            <Text style={[styles.textLg]}>Ao</Text>
            <Text style={[styles.textLg, styles.textBold]}>Minhas Finanças</Text>
            <TextField
                labelTxt="Nome"
                placeholder="Insira o seu para começar"
                onChangeText={setUser}
            />
            <Button title="Entrar" onPress={goToDash} />
        </View>
    );
}