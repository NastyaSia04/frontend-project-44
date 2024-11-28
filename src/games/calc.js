import print from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsList = ['+', '-', '*'];
  const indexOperator = getRandomNumber(0, (operatorsList.length - 1));
  return operatorsList[indexOperator];
};

const getExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getResultExpression = () => {
  const operator = getRandomOperator();
  const minValue = 1;
  const maxValue = 99;
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);
  const expression = `${number1} ${operator} ${number2}`;
  const resultExpression = getExpression(number1, number2, operator);
  return [expression, resultExpression.toString()];
};

export default () => {
  print(gameDescription, getResultExpression);
};
