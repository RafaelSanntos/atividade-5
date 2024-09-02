import { useState } from 'react';
import { fetchTranslatedText } from '../services/translationService';
import { Container, Title, Label, Select, Input, Button, TranslatedText } from '../components_styles/LanguageTranslatorStyle';

const LanguageTranslator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [error, setError] = useState(null);

  const translateText = async () => {
    try {
      setError(null);
      const data = await fetchTranslatedText(text, sourceLang, targetLang);
      setTranslatedText(data);
    } catch (error) {
      setError("Failed to translate text. Please try again."); // Atualiza o estado de erro
    }
  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <Button onClick={translateText}>Translate</Button>
      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
      )}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
    </Container>
  );
};

export default LanguageTranslator;
