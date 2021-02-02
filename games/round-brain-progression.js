import runPattern from '../src/index.js'; // game logic

const runGame = () => {
  // current task description for user
  const task = 'What number is missing in the progression?';

  // generate random 10 numbers progression
  const getQuestion = () => {
    let number = Math.floor(Math.random() * (11 - 1)) + 1; // generate first number from 1 to 10
    const increment = Math.floor(Math.random() * (11 - 1)) + 1; // generate step from 1 to 10
    const progression = [number];
    for (let i = 0; i <= 8; i += 1) {
      number += increment;
      progression.push(number);
    }
    // hide random number
    const hideIndex = Math.floor(Math.random() * (progression.length - 1)) + 1;
    progression[hideIndex] = '..';
    return progression.join(' ');
  };

  // calculate correct answer to compare with user answer
  const getAnswer = (string) => {
    const separator = ' ';
    const elements = string.split(separator);
    const index = elements.indexOf('..');
    let step = elements[index - 1] - elements[index - 2];
    if (Number.isNaN(step)) {
      step = elements[index + 2] - elements[index + 1];
      return elements[index + 1] - step;
    }
    return Number(elements[index - 1]) + step;
  };
  runPattern(task, getQuestion, getAnswer);
};

export default runGame;
