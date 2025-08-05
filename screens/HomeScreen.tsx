import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from 'react';
import CustomButton from '../componentes/CustomButton';
import CustomModal from '../componentes/CustomModal';
import TaskCard from '../componentes/TaskCard';
import { useTasks } from './contexts/TaskContext';

export default function HomeScreen({ navigation }: any) {
  const { localTasks, deleteTask, toggleTaskCompletion } = useTasks(); // usando o contexto

  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

 
  const filteredTasks = localTasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  const renderItem = ({ item }: any) => {
    return (
      <>
        <Text style={styles.sourceText}>Local</Text>
        <TaskCard
          title={item.title}
          completed={item.completed}
          onPress={() => navigation.navigate('Details', { task: item })}
          onToggle={() => toggleTaskCompletion(item.id)}
          onDelete={() => {
            setTaskToDelete(item.id);
            setModalVisible(true);
          }}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>𝐋𝐢𝐬𝐭𝐚 𝐃𝐞 𝐓𝐚𝐫𝐞𝐟𝐚𝐬</Text>

     
      <View style={styles.filterContainer}>
        <CustomButton
          title="Todas"
          onPress={() => setFilter('all')}
          color={filter === 'all' ? '#007bff' : '#ddd'}
          textStyle={{ color: filter === 'all' ? '#fff' : '#333' }}
        />
        <CustomButton
          title="Pendentes"
          onPress={() => setFilter('pending')}
          color={filter === 'pending' ? '#007bff' : '#ddd'}
          textStyle={{ color: filter === 'pending' ? '#fff' : '#333' }}
        />
        <CustomButton
          title="Concluídas"
          onPress={() => setFilter('completed')}
          color={filter === 'completed' ? '#007bff' : '#ddd'}
          textStyle={{ color: filter === 'completed' ? '#fff' : '#333' }}
        />
      </View>

      
      <FlatList
        style={styles.list}
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      
      <CustomButton
        title="Adicionar Tarefa"
        onPress={() => navigation.navigate('AddTask')}
        color="#28a745"
      />

      
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Confirmar Exclusão"
        message="Deseja realmente excluir esta tarefa?"
        onConfirm={() => {
          if (taskToDelete) {
            deleteTask(taskToDelete);
            setModalVisible(false);
            setTaskToDelete(null);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4ed',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  sourceText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
});