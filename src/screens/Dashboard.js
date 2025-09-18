import {
  Alert,
  Button,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/main";
import { useState } from "react";
import Card from "../components/Card";
import TextField from "../components/TextField";

export default function Dashboard({ navigation }) {
  const [bills, setBills] = useState([
    { id: 1, title: "Pagar Uniara", date: Date.now(), status: false },
    { id: 2, title: "Pagar CC", date: Date.now(), status: true },
    { id: 3, title: "Pagar Uniara", date: Date.now(), status: false },
  ]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [nextId, setNextId] = useState(4);
  const [isOpened, setIsOpened] = useState(false);

  const [selectedBill, setSelectedBill] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setTitle("");
    setIsOpened(false);
  };

  const addBill = () => {
    if (!title || title.trim().length === 0) {
      Alert.alert("Atenção", "Favor preencher o título");
      return;
    }

    if (!date) {
      Alert.alert("Atenção", "Selecione uma data");
      return;
    }

    const bill = {
      id: nextId,
      title: title,
      date: date,
      status: false,
    };

    setBills((prevBills) => [...prevBills, bill]);
    setNextId((prev) => prev + 1);
    closeModal();
  };

  const openDetails = (bill) => {
    setSelectedBill(bill);
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setSelectedBill(null);
    setIsDetailsOpen(false);
  };

  const togglePaid = () => {
    if (!selectedBill) return;

    const updatedBills = bills.map((b) =>
      b.id === selectedBill.id ? { ...b, status: !b.status } : b
    );

    setBills(updatedBills);
    setSelectedBill((prev) => ({ ...prev, status: !prev.status }));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bills}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openDetails(item)}>
            <Card
              title={item.title}
              content={new Date(item.date).toLocaleDateString("pt-BR")}
              status={item.status}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* modal de nova conta */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpened}
        onRequestClose={closeModal}
      >
        <View
          style={[
            styles.container,
            styles.modal,
            { justifyContent: "space-evenly" },
          ]}
        >
          <Text style={styles.textLg}>Adicionar uma conta</Text>
          <TextField
            labelTxt="Título"
            onChangeText={setTitle}
            placeholder={"Insira um título para conta"}
          />
          <View style={{ gap: 2 }}>
            <Button title="Adicionar" onPress={addBill} />
            <Button title="Cancelar" color="#ec0707ff" onPress={closeModal} />
          </View>
        </View>
      </Modal>

      {/* modal de detalhes */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isDetailsOpen}
        onRequestClose={closeDetails}
      >
        <View
          style={[
            styles.container,
            styles.modal,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          {selectedBill && (
            <>
              <Text style={styles.textLg}>{selectedBill.title}</Text>
              <Text>
                Data: {new Date(selectedBill.date).toLocaleDateString("pt-BR")}
              </Text>
              <Text>Status: {selectedBill.status ? "Pago" : "Pendente"}</Text>

              <View style={{ marginTop: 15, gap: 10 }}>
                <Button
                  title={
                    selectedBill.status ? "Marcar como Pendente" : "Marcar como Pago"
                  }
                  onPress={togglePaid}
                />
                <Button title="Fechar" onPress={closeDetails} />
              </View>
            </>
          )}
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
          alignItems: "center",
        }}
        onPress={openModal}
      >
        <Text style={[styles.textSm, styles.textWhite]}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
