import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AddTaskScreen({ navigation, route }:any) {
  const { addTask } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') {
      Alert.alert('Erro', 'O título da tarefa é obrigatório.');
      return;
    }

    addTask({ title, description });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Tarefa</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Digite o título"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        value={description}
        onChangeText={setDescription}
        placeholder="Digite a descrição (opcional)"
        multiline
        numberOfLines={4}
      />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 5,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});