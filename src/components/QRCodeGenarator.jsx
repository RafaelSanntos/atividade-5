import { useState } from 'react';
import { generateQRCode } from '../services/qrCodeService';
import { Container, Title, Input, Button, QRCodeContainer, QRCodeImage } from '../components_styles/QRCodeGeneratorStyles';

const QRCodeGenerator = () => {
  const [text, setText] = useState(''); // Define o estado para o texto do QR Code
  const [qrCodeUrl, setQrCodeUrl] = useState(''); // Define o estado para a URL do QR Code
  const [error, setError] = useState(null); // Define o estado para armazenar erros

  // Função para gerar o QR Code
  const handleGenerateQRCode = async () => {
    try {
      if (!text.trim()) {
        setError("Please enter text to generate QR Code.");
        return;
      }

      setError(null);
      const url = await generateQRCode(text); // Chama a função generateQRCode do serviço
      setQrCodeUrl(url); // Armazena a URL do QR Code no estado qrCodeUrl
    } catch (error) {
      setError(error.message); // Atualiza o estado de erro
    }
  };

  return (
    <Container>
      <Title>QR Code Generator</Title>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Enter text" // Placeholder do campo de entrada
      />
      <Button onClick={handleGenerateQRCode}>Generate QR Code</Button> {/* Botão que chama a função handleGenerateQRCode quando clicado */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe a mensagem de erro se existir */}
      {qrCodeUrl && (
        <QRCodeContainer>
          <QRCodeImage src={qrCodeUrl} alt="Generated QR Code" /> {/* Exibe o QR Code gerado */}
        </QRCodeContainer>
      )}
    </Container>
  );
};

export default QRCodeGenerator; // Exporta o componente QRCodeGenerator como padrão
