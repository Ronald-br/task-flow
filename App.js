import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';
import { ref, push, onValue } from 'firebase/database';
import { db } from './firebaseConfig';

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  // Função para ENVIAR dados para o Firebase
  const salvarTarefa = () => {
    if (novaTarefa.trim() === '') {
      Alert.alert('Aviso', 'Digite algo antes de salvar!');
      return;
    }

    push(ref(db, 'tarefas/'), {
      titulo: novaTarefa,
      criadoEm: new Date().toISOString()
    })
      .then(() => {
        setNovaTarefa('');
        Alert.alert('Sucesso', 'Salvo no Firebase!');
      })
      .catch((error) => {
        Alert.alert('Erro', error.message);
      });
  };

  // Função para BUSCAR dados em tempo real do Firebase
  useEffect(() => {
    const tarefasRef = ref(db, 'tarefas/');
    const unsubscribe = onValue(tarefasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dadosFormatados = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setListaTarefas(dadosFormatados);
      } else {
        setListaTarefas([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas (Firebase)</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <Button title="Adicionar" onPress={salvarTarefa} />
      </View>

      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  itemTexto: {
    fontSize: 16,
  },
});