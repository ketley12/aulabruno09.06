import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import DetailsScreen from './screens/DetailsScreen';
import { TaskProvider } from './screens/contexts/TaskContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Lista de Tarefas',
              headerStyle: { backgroundColor: '#007bff' },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTaskScreen}
            options={{
              title: 'Adicionar Tarefa',
              headerStyle: { backgroundColor: '#28a745' },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: 'Detalhes da Tarefa',
              headerStyle: { backgroundColor: '#dc3545' },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}