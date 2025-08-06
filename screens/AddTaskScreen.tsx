import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import CustomInput from '../componentes/CustomImput';
import CustomButton from '../componentes/CustomButton';
import { useTasks } from './contexts/TaskContext';
const AddTaskScreen = ({ route, navigation }: any) => {
  const task = route?.params?.task;
  const { addTask, deleteTask } = useTasks();
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddTask = async () => {
    if (title.trim()) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false,
        });
        if (task) deleteTask(task.id);
        addTask({ title, description });
        setSuccessMessage('Tarefa adicionada com sucesso!');
        setTimeout(() => {
          setSuccessMessage('');
          navigation.goBack();
        }, 2000);
      } catch (err) {
        Alert.alert('Erro', 'Falha ao salvar ');
      }
    } else {
      Alert.alert('Erro', 'Por favor, insira o título da tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
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
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfffe1ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  successText: {
    fontSize: 16,
    color: '#28a745',
    textAlign: 'center',
    marginBottom: 10,
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