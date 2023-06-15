import React, {
  useEffect,
  useState
} from 'react';

import { questions } from './questions';

import {
  Container,
  Question,
  AnswerLabel,
  AnswerInput,
  Button,
  Title,
  ButtonContainer,
  Correct,
  UnCorrect,
  Div,
  P
} from './testStyle';

export const Test: React.FC = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [completed, setCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [restart, setRestart] = useState(false);
  const [timer, setTimer] = useState(600);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  useEffect(() => {

    const timerInterval = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);

    return () => clearInterval(timerInterval);

  }, []);

  useEffect(() => {

    if (timer === 0) handleTimeUp();

  }, [timer]);

  const handleTimeUp = () => setCompleted(true);

  useEffect(() => {

    const handleFullscreenChange = () => (!document.fullscreenElement) ? setRestart(true) : setRestart(false)

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);

  }, []);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSelectedAnswer(event.target.value);
    setIsAnswerSelected(true);

  };

  const handleAnswer = () => {

    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.answers.find(answer => answer.option === selectedAnswer);

    if (selectedOption && selectedOption.isCorrect) setScore(score + 1);

    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);

    if (currentQuestionIndex === questions.length - 1) setCompleted(true);
    else setAnswered(true);

    setIsAnswerSelected(false);

  };

  const handleNextQuestion = () => {

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswered(false);
    setSelectedAnswer('');

  };

  const handleRestartTest = () => {

    const element = document.documentElement as any;

    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();


    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer('');
    setCompleted(false);
    setUserAnswers(Array(questions.length).fill(''));
    setRestart(false);

  };

  const currentQuestion = questions[currentQuestionIndex];

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (

    <Container>

      {!completed && !restart ? (

        <>

          <Title>

            Оставшееся время:
            {' '}
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}

          </Title>

          {!answered ? (

            <>

              <Question>

                {currentQuestion.question}

              </Question>

              {currentQuestion.answers.map((answer, index) => (

                <AnswerLabel
                  key={index}
                >

                  <AnswerInput
                    type="radio"
                    name="answer"
                    value={answer.option}
                    onChange={handleRadioChange}
                  />

                  {answer.option}

                </AnswerLabel>

              ))}

              <Button
                onClick={handleAnswer}
                disabled={!isAnswerSelected}
              >

                Ответить

              </Button>

            </>

          ) : (

            <>

              <Title>

                Ответ засчитан

              </Title>

              {currentQuestionIndex < questions.length - 1 && (

                <ButtonContainer>

                  <Button
                    onClick={handleNextQuestion}
                  >

                    Следующий вопрос

                  </Button>

                  <Button
                    onClick={() => setCompleted(true)}
                  >

                    Завершить тест

                  </Button>

                </ButtonContainer>

              )}

              {currentQuestionIndex === questions.length - 1 && (

                <Button
                  onClick={() => setRestart(true)}
                >

                  Начать тест заново

                </Button>

              )}

            </>

          )}

        </>

      ) : (

        <>

          {restart ? (

            <>

              <Title>

                Нажмите кнопку чтобы пройти тест заново

              </Title>

              <Button
                onClick={handleRestartTest}
              >

                Начать

              </Button>

            </>

          ) : (

            <>

              <Title>

                Тест завершен!

              </Title>

              <P>

                Вы набрали {score} баллов из {questions.length}.

              </P>

              <Title>

                Ответы:

              </Title>

              {questions.map((question, index) => (

                <Div
                  key={index}
                >

                  <Question>

                    {question.question}

                  </Question>

                  <P>

                    Ваш ответ: {userAnswers[index]}

                  </P>

                  <P>

                    Правильный ответ: {question.answers.find(answer => answer.isCorrect)?.option}

                  </P>

                  {userAnswers[index] === question.answers.find(answer => answer.isCorrect)?.option ? (

                    <Correct>

                      1/1

                    </Correct>

                  ) : (

                    <UnCorrect>

                      0/0

                    </UnCorrect>

                  )}

                </Div>

              ))}

              <Button
                onClick={() => setRestart(true)}
              >

                Пройти заново

              </Button>

            </>

          )}

        </>

      )}

    </Container>

  );
};
