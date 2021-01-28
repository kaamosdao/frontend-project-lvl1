import runPattern from '../src/index.js'; // game logic

const runGame = () => {
  // current task description for user
  const task = 'What is the result of the expression?';

  // generate random math operation with '+', or '-', or '*' and 2 numbers
  const getQuestion = () => {
    const symbols = ['+', '-', '*'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    return `${randomNumber1} ${randomSymbol} ${randomNumber2}`;
  };
  // calculate correct answer to compare with user answer
  const getAnswer = (string) => {
    const separator = ' ';
    const elements = string.split(separator);
    if (elements.includes('+')) {
      return Number(elements[0]) + Number(elements[2]);
    } if (elements.includes('-')) {
      return Number(elements[0]) - Number(elements[2]);
    }
    return elements[0] * elements[2];
  };

  runPattern(task, getQuestion, getAnswer);
};

export default runGame;
