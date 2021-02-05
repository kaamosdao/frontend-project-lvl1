import runGameEngine from '../index.js';
import getRandom from '../random.js';

const runGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const findCommonDivisor = (number1, number2) => {
    const minNumber = Math.min(number1, number2);
    const maxNumber = Math.max(number1, number2);
    const divisors = [];
    for (let i = minNumber; i > 0; i -= 1) {
      if (minNumber % i === 0 && maxNumber % i === 0) {
        divisors.push(i);
      }
    }
    return Math.max(...divisors);
  };

  const getQuestionAndAnswer = () => {
    const randomNumber1 = getRandom(1, 100);
    const randomNumber2 = getRandom(1, 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const answer = String(findCommonDivisor(randomNumber1, randomNumber2));
    return [question, answer];
  };
  runGameEngine(description, getQuestionAndAnswer);
};

export default runGame;
