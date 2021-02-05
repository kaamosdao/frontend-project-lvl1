import runGameEngine from '../index.js';
import getRandom from '../random.js';

const runGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const isEven = (number) => number % 2 === 0;
    const question = getRandom(0, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };

  runGameEngine(description, getQuestionAndAnswer);
};

export default runGame;
