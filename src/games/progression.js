import print from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (firstNumber, step, lengthProgr) => {
  let num = firstNumber;
  const newProgr = [num];
  for (let i = 0; i < lengthProgr; i += 1) {
    num += step;
    newProgr.push(num);
  }
  return newProgr;
};

const getHiddenNumberProgr = () => {
  const minValue = 1;
  const maxValue = 20;
  const firstNumber = getRandomNumber(minValue, maxValue);
  const minStep = 1;
  const maxStep = 6;
  const step = getRandomNumber(minStep, maxStep);
  const minLength = 5;
  const maxLength = 10;
  const lengthProgr = getRandomNumber(minLength, maxLength);
  const designationSymbol = ['..'];
  const progression = generateProgression(firstNumber, step, lengthProgr);
  const startPosition = 0;
  const finishPosition = progression.length - 1;
  const positionHiddenNumber = getRandomNumber(startPosition, finishPosition);
  const hiddenNumber = progression[positionHiddenNumber];
  progression[positionHiddenNumber] = designationSymbol;
  const normalProgression = progression.join(' ');
  return [normalProgression, hiddenNumber.toString()];
};

export default () => {
  print(gameDescription, getHiddenNumberProgr);
};
