import styled from 'styled-components';

// Define o estilo do container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 50px auto;
`;

// Define o estilo do título
export const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o estilo do campo de entrada
export const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do botão
export const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define o estilo do QR Code
export const QRCodeContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

// Define o estilo do QR Code
export const QRCodeImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
