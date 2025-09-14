import { Alert, Button, FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/main";
import { useState } from "react";
import Card from "../components/Card";
import TextField from "../components/TextField";
import DatePicker from "react-native-date-picker";

export default function Dashboard({ navigation }) {
    const [bills, setBills] = useState([
        { id: 1, title: "Pagar Uniara", date: Date.now(), status: false },
        { id: 2, title: "Pagar CC", date: Date.now(), status: true },
        { id: 3, title: "Pagar Uniara", date: Date.now(), status: false },
    ]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [isPaid, setIsPaid] = useState(false);
    const [nextId, setNextId] = useState(4);
    const [isOpened, setIsOpened] = useState(false);

    const openModal = () => {
        setIsOpened(true);
    };

    const closeModal = () => {
        setTitle("");
        setDate(null);
        setIsOpened(false);
    };

    const addBill = () => {
        if(!title || title.trim().length === 0) {
            Alert.alert("Atenção", "Favor preencher o título");
            return;
        }

        if(!date) {
            Alert.alert("Atenção", "Selecione uma data");
            return;
        }
        Alert.alert("atgag", "passou ifs")
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={bills}
                renderItem={({item}) => <Card title={item.title} content={item.date} status={item.status} />}
                keyExtractor={item => item.id}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isOpened}
                onRequestClose={closeModal}
            >
                <View style={[styles.container, styles.modal, { justifyContent: "space-evenly" }]}>
                    <Text style={styles.textLg}>Adicionar uma conta</Text>
                    <TextField
                        labelTxt="Título"
                        onChangeText={setTitle}
                        placeholder={"Insira um título para conta"}
                    />
                    <DatePicker date={date} onDateChange={setDate} />
                    <View style={{ gap: 2 }}>
                        <Button title="Adicionar" onPress={addBill} />
                        <Button title="Cancelar" color="#ec0707ff" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={{
                    width: 75,
                    height: 75,
                    backgroundColor: "#0097eeff",
                    borderRadius: 50,
                    position: "absolute",
                    right: 25,
                    bottom: 25,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onPress={openModal}
            >
                <Text style={[styles.textSm, styles.textWhite]}>+</Text>
            </TouchableOpacity>
        </View>
    );
}