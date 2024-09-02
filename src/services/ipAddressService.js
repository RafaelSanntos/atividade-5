import axios from 'axios';

const API_URL = 'https://ipinfo.io';

export const fetchIPData = async (ip) => {
  try {
    const url = `${API_URL}/${ip}/json`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch IP address data.");
  }
};
