import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  };
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    const isEven = (number) => {
      if (number % 2 !== 0) {
        return false;
      }
      return true;
    };
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log( `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
