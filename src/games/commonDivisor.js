import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

/* возвращает случайное число */
const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

/* вычисляет наибольший общий делитель */
const getGcd = (num1, num2) => {
  let i = Math.min(num1, num2);
  for (i; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

/* создает два рандомных числа, формирует выражение, вычисляет НОД.
Возвращает выражение и его результат */
const getRandomExpression = () => {
  const numberOne = getRandomNumber(1, 50);
  const numberTwo = getRandomNumber(1, 50);
  const expression = `${numberOne} ${numberTwo}`;
  const gcd = getGcd(numberOne, numberTwo);
  return [expression, gcd.toString()];
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
