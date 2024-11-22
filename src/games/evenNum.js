import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

/*  возвращается случайное число */
const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

/* Вычисляет является ли число четным */
const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

/* Создает случайное число, проверяет это число на четность. Вычисляет результат ('yes' или 'no').
Возвращает масссив с выражением и его результатом   */
const getRandomExpression = () => {
  const expression = getRandomNumber(16, 32);
  const isEvenNum = isEven(expression);
  let result;
  switch (isEvenNum) {
    case true:
      result = 'yes';
      break;
    case false:
      result = 'no';
      break;
    // no default
  }
  return [expression, result];
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
