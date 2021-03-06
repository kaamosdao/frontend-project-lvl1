import runGameEngine from '../index.js';
import getRandom from '../random.js';

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
  const hiddenIndex = getRandom(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => runGameEngine(description, getQuestionAndAnswer);
