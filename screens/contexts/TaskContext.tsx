import { createContext, useContext, useState, ReactNode } from 'react';

type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
};


type TaskContextType = {
  localTasks: Task[];
  addTask: (task: { title: string; description?: string; id?: string }) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);


export function TaskProvider({ children }: { children: ReactNode }) {
  const [localTasks, setLocalTasks] = useState<Task[]>([]);

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

  return (
    <TaskContext.Provider
      value={{ localTasks, addTask, toggleTaskCompletion, deleteTask }}
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

function setLocalTasks(arg0: (prev: any) => any) {
  throw new Error('Function not implemented.');
}
