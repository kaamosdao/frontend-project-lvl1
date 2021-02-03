import runPattern from '../src/index.js'; // game logic

const runGame = () => {
  // current task description for user
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  // generate random number from 0 to 101, showed to user
  const getQuestion = () => Math.floor(Math.random() * 102);
  // calculate correct answer to compare with user answer
  const getAnswer = (number) => {
    for (let i = 2; i < number / 2; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  runPattern(task, getQuestion, getAnswer);
};

export default runGame;
