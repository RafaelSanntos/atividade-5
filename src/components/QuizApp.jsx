import { useState } from 'react';
import { Container, Title, Question, OptionButton, Score } from '../components_styles/QuizAppStyles'; // Importa os estilos do arquivo separado

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is 2+2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is 3+3?",
      options: ["5", "6", "7", "8"],
      answer: "6",
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Container>
      <Title>Quiz App</Title>
      {currentQuestion < questions.length ? (
        <div>
          <Question>{questions[currentQuestion].question}</Question>
          {questions[currentQuestion].options.map((option) => (
            <OptionButton key={option} onClick={() => handleAnswer(option)}>
              {option}
            </OptionButton>
          ))}
        </div>
      ) : (
        <Score>Your score: {score}</Score>
      )}
    </Container>
  );
};

export default QuizApp;
