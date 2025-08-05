import { useState } from 'react';
import { View, Text, StyleSheet, Alert, Task } from 'react-native';
import axios from 'axios';
import CustomInput from '../componentes/CustomImput';
import CustomButton from '../componentes/CustomButton';
import { useTasks } from './contexts/TaskContext';


export default function AddTaskScreen({ navigation}: any) {
  const {addTask}= useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    if (!title.trim()) {
      Alert.alert('Erro', 'Por favor, insira o título da tarefa.');
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      });

      const newTask: Task = {
        id: response?.data?.id?.toString() || Date.now().toString(), 
        title,
        description,
      };

      addTask(newTask);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar na API.');
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Tarefa</Text>
      <CustomInput
        value={title}
        onChangeText={(text: string) => setTitle(text.slice(0, 50))}
        placeholder="Digite o título da tarefa (máx. 50 caracteres)"
      />
      <Text style={styles.label}>Descrição (opcional)</Text>
      <CustomInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite a descrição"
        multiline
      />
      <CustomButton title="Salvar Tarefa" onPress={handleAddTask} color="#007bff" />
      <CustomButton title="Cancelar" onPress={() => navigation.goBack()} color="#dc3545" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 10,
  },
});