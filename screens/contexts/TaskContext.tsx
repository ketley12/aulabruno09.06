import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
};

interface TaskContextType {
  localTasks: Task[];
  addTask: (task: { title: string; description?: string; id?: string }) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  clearTasks: () => Promise<void>;
  exportTasks: () => string;
  restoreTasks: (json: string) => boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

type TaskProviderProps = {
  children: ReactNode;
};

export function TaskProvider({ children }: TaskProviderProps) {
  const [localTasks, setLocalTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Carregar tarefas do AsyncStorage ao iniciar
  // Carregar tarefas do AsyncStorage ao iniciar, validando formato
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('@TaskApp:tasks');
        if (savedTasks) {
          const parsedTasks = JSON.parse(savedTasks);
          if (Array.isArray(parsedTasks) && parsedTasks.every(task => task.id && task.title)) {
            setLocalTasks(parsedTasks);
          } else {
            console.warn('Dados inválidos, inicializando com array vazio');
            setLocalTasks([]);
          }
        }
      } catch (err) {
        console.error('Erro ao carregar tarefas:', err);
      }
    };
    loadTasks();
  }, []);

  // Salvar tarefas no AsyncStorage sempre que localTasks mudar
  // Salvar tarefas no AsyncStorage quando localTasks mudar
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('@TaskApp:tasks', JSON.stringify(localTasks));
      } catch (err) {
        console.error('Erro ao salvar tarefas:', err);
      }
    };
    saveTasks();
  }, [localTasks]);

  const addTask = ({ title, description = '', id }: any) => {
    setLocalTasks(prev => [
      ...prev,
      {
        id: id || `local-${Date.now()}`,
        title,
        description,
        completed: false,
      },
    ]);
  };

  const toggleTaskCompletion = (id: string) => {
    setLocalTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setLocalTasks(prev => prev.filter(task => task.id !== id));
  };

  const clearTasks = async () => {
    try {
      await AsyncStorage.removeItem('@TaskApp:tasks');
      setLocalTasks([]);
    } catch (err) {
      console.error('Erro ao limpar tarefas:', err);
    }
  };

  const exportTasks = () => {
    return JSON.stringify(localTasks, null, 2);
  };

  const restoreTasks = (json: string) => {
    try {
      const tasks = JSON.parse(json);
      if (Array.isArray(tasks) && tasks.every(task => task.id && task.title)) {
        setLocalTasks(tasks);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <TaskContext.Provider
      value={{ localTasks, addTask, toggleTaskCompletion, deleteTask, clearTasks, exportTasks, restoreTasks, theme, toggleTheme }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}

