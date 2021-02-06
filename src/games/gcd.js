import runGameEngine from '../index.js';
import getRandom from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => ((!num2) ? num1 : findGCD(num2, num1 % num2));

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandom(1, 100);
  const randomNumber2 = getRandom(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(findGCD(randomNumber1, randomNumber2));
  return [question, answer];
};

export default () => runGameEngine(description, getQuestionAndAnswer);
