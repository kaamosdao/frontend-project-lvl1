import runPattern from '../src/index.js'; // game logic

const runGame = () => {
  // current task description for user
  const task = 'Find the greatest common divisor of given numbers.';

  // generate 2 random numbers from 1 to 100
  const getQuestion = () => {
    const randomNumber1 = Math.floor(Math.random() * (101 - 1)) + 1;
    const randomNumber2 = Math.floor(Math.random() * (101 - 1)) + 1;
    return `${randomNumber1} ${randomNumber2}`;
  };

  // calculate correct answer to compare with user answer
  const getAnswer = (string) => {
    const separator = ' ';
    const elements = string.split(separator);
    const minNumber = Math.min(...elements);
    const maxNumber = Math.max(...elements);
    // lets find all common divisors of numbers
    const divisors = [];
    for (let i = minNumber; i > 0; i -= 1) {
      if (minNumber % i === 0 && maxNumber % i === 0) {
        divisors.push(i);
      }
    }
    // return greatest divisor
    return Math.max(...divisors);
  };
  runPattern(task, getQuestion, getAnswer);
};

export default runGame;
