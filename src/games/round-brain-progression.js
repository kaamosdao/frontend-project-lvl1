import runGameEngine from '../index.js';
import getRandom from '../random.js';

const runGame = () => {
  const description = 'What number is missing in the progression?';

  const getProgression = (firstNumber, increment, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(firstNumber + (i * increment));
    }
    return progression;
  };

  const getQuestionAndAnswer = () => {
    const number = getRandom(1, 10);
    const increment = getRandom(1, 10);
    const progression = getProgression(number, increment, 10);
    const hideIndex = getRandom(0, progression.length - 1);
    const answer = String(progression[hideIndex]);
    progression[hideIndex] = '..';
    const question = progression.join(' ');
    return [question, answer];
  };
  runGameEngine(description, getQuestionAndAnswer);
};

export default runGame;
