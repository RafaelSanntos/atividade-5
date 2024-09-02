// import axios from 'axios';

// const API_URL = 'https://dummyjson.com/todos';

// export const fetchTasks = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data.todos; // A API DummyJSON retorna os dados dentro de um objeto "todos"
//   } catch (error) {
//     console.error('Error fetching tasks:', error.response ? error.response.data : error.message);
//     throw new Error('Failed to fetch tasks. Please try again later.');
//   }
// };

// export const addTask = async (text) => {
//   try {
//     const newTask = { todo: text, completed: false, userId: 1 };
//     const response = await axios.post(API_URL, newTask);
//     console.log(response.data); // Adicionado para depuração
//     return response.data;
//   } catch (error) {
//     console.error('Error adding task:', error.response ? error.response.data : error.message);
//     throw new Error('Failed to add task. Please try again later.');
//   }
// };

// export const deleteTask = async (id) => {
//   try {
//     await axios.delete(`${API_URL}/${id}`);
//   } catch (error) {
//     console.error('Error deleting task:', error.response ? error.response.data : error.message);
//     throw new Error('Failed to delete task. Please try again later.');
//   }
// };

// export const updateTask = async (id, text) => {
//   try {
//     const updatedTask = { todo: text, completed: false, userId: 1 };
//     const response = await axios.put(`${API_URL}/${id}`, updatedTask);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating task:', error.response ? error.response.data : error.message);
//     throw new Error('Failed to update task. Please try again later.');
//   }
// };
