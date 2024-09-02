import { useState } from 'react';
import { Container, Title, Input, Button, TaskList, TaskItem, EditInput } from '../components_styles/TodoAppStyles';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  const handleAddTask = () => {
    if (task) {
      const newTask = { id: tasks.length + 1, todo: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const handleUpdateTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, todo: editingTaskText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditingTaskText('');
  };

  return (
    <Container>
      <Title>Todo App</Title>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={handleAddTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <EditInput
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={() => handleUpdateTask(task.id)}
              />
            ) : (
              <>
                {task.todo}
                <div>
                  <button onClick={() => handleEditTask(task.id, task.todo)}>Edit</button>
                  <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoApp;
