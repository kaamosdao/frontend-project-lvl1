import runPattern from '../src/index.js'; // game logic

const runGame = () => {
  // current task description for user
  const task = 'What is the result of the expression?';

  // generate random math operation with '+', or '-', or '*' and 2 numbers from 0 to 100
  const getQuestion = () => {
    const symbols = ['+', '-', '*'];
    const Symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const Number1 = Math.floor(Math.random() * 101);
    const Number2 = Math.floor(Math.random() * 101);
    if (Symbol === '-') {
      return `${Math.max(Number1, Number2)} ${Symbol} ${Math.min(Number1, Number2)}`;
    }
    return `${Number1} ${Symbol} ${Number2}`;
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
