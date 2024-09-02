import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = '403abbfe'; // Substitua pela sua chave de API real

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?s=${query}&apikey=${API_KEY}`);
    
    if (response.data && response.data.Search) {
      return response.data.Search;
    } else {
      throw new Error("No movies found.");
    }
  } catch (error) {
    console.error("Error fetching movie data:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch movie data. Please try again later.");
  }
};
