import runPattern from '../src/index.js'; // game logic

const runGame = () => {
  // current task description for user
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  // generate random number, showed to user
  const getQuestion = () => Math.floor(Math.random() * 101);
  // calculate correct answer to compare with user answer
  const getAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

  runPattern(task, getQuestion, getAnswer);
};

export default runGame;
