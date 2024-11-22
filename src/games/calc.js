import game from '../index.js';

const description = 'What is the result of the expression?';

/*  функция возвращает случайное число */
const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

/*  возвращает случайный оператор   */
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomSign = getRandomNumber(0, (operators.length - 1));
  return operators[randomSign];
};

/*  создает 2 случайных числа, выбирает случайный оператор, формирует строку выражения,
вычисляет результат выражения. Возвращает массив с выражением и его результатом   */
const getRandomExpression = () => {
  const numberOne = getRandomNumber(1, 99);
  const numberTwo = getRandomNumber(1, 99);
  const sign = getRandomOperator();
  const expression = `${numberOne} ${sign} ${numberTwo}`;
  let result;
  switch (sign) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    // no default
  }
  return [expression, result.toString()];
};

/* возвращает массив с вопросом и корректным ответом */
const getQuiz = () => {
  const [question, correctAnswer] = getRandomExpression();
  return [question, correctAnswer];
};

/* экспортируется по умолчанию функция игры с заданным описанием и квизом */
export default () => {
  game(description, getQuiz);
};
