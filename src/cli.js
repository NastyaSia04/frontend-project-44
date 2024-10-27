import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name?');
  console.log('Welcome to the Brain Games!');
  console.log(userName);
  console.log(`Hello, ${userName}!`);
};
