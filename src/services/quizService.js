import axios from 'axios';

// Define a URL base da API do quiz
const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'; // Ajuste conforme necessário

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    
    if (response.data.results) {
      return response.data.results; // Retorna as perguntas
    } else {
      throw new Error("Failed to fetch quiz questions.");
    }
  } catch (error) {
    console.error("Error fetching quiz questions:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch quiz questions. Please try again later.");
  }
};
