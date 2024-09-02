import axios from 'axios';

const API_URL = 'https://api.qrserver.com/v1/create-qr-code/';
const SIZE = '150x150'; // Tamanho do QR Code

export const generateQRCode = async (text) => {
  try {
    const response = await axios.get(`${API_URL}?size=${SIZE}&data=${encodeURIComponent(text)}`);
    
    if (response.config.url) {
      return response.config.url; // Retorna a URL do QR Code gerado
    } else {
      throw new Error("Failed to generate QR Code.");
    }
  } catch (error) {
    console.error("Error generating QR Code:", error.response ? error.response.data : error.message);
    throw new Error("Failed to generate QR Code. Please try again later.");
  }
};
