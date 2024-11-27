import game from '../index.js';
import getRandomNumber from '../../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getIsEvenNumber = () => {
  const minNum = 16;
  const maxNum = 32;
  const number = getRandomNumber(minNum, maxNum);
  const isEvenValue = (isEven(number) ? 'yes' : 'no');
  return [number, isEvenValue];
};

export default () => {
  game(gameDescription, getIsEvenNumber);
};
