import game from '../index.js';

const description = 'What number is missing in the progression?';

/*  возвращает случайное число */
const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

/* функция, возвращающая прогрессию (массив чисел) */
const makeProgression = (firstNumber, step, lengthProgr) => {
  let num = firstNumber;
  const newArr = [num];
  for (let i = 0; i < lengthProgr; i += 1) {
    num += step;
    newArr.push(num);
  }
  return newArr;
};

/* функция, возвращает прогрессию со скрытым символом и правильным ответом(скрытое число)
- возврат массива */
const getProgression = () => {
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 6);
  const lengthProgr = getRandomNumber(5, 10);
  const symbol = ['..'];
  const progression = makeProgression(firstNumber, step, lengthProgr);
  const positionHiddenNumber = getRandomNumber(0, progression.length - 1);
  const correctResult = progression[positionHiddenNumber];
  progression[positionHiddenNumber] = symbol;
  const normalProgression = progression.join(' ');
  return [normalProgression, correctResult.toString()];
};

/* функция возвращает массив с вопросом(прогрессией) и корректным ответом */
const getQuiz = () => {
  const [question, correctAnswer] = getProgression();
  return [question, correctAnswer];
};

/* экспортируется по умолчанию функция игры с заданным описанием и квизом */
export default () => {
  game(description, getQuiz);
};
