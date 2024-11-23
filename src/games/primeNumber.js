import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/*  возвращается случайное число */
const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

/* вычисляет является ли число простым (true - простое) */
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

/* Создает случайное число, проверяет является ли это число простым.
Вычисляет результат ('yes' или 'no').
Возвращает масссив с двумя элементами: число и результат его проверки */
const getIsPrimeNumber = () => {
  const number = getRandomNumber(0, 100);
  const isPrimeNum = isPrime(number);
  let result;
  switch (isPrimeNum) {
    case true:
      result = 'yes';
      break;
    case false:
      result = 'no';
      break;
    // no default
  }
  return [number, result];
};

/* возвращает массив с вопросом и корректным ответом */
const getQuiz = () => {
  const [question, correctAnswer] = getIsPrimeNumber();
  return [question, correctAnswer];
};

/* экспортируется по умолчанию функция игры с заданным описанием и квизом */
export default () => {
  game(description, getQuiz);
};
