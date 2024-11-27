const getRandomNumber = (minNum, maxNum) => {
  const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  return randomNumber;
};

export default getRandomNumber;
