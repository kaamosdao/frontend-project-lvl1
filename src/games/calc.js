import runGameEngine from '../index.js';
import getRandom from '../random.js';

const description = 'What is the result of the expression?';

const calculateExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};
const getQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const symbol = operations[getRandom(0, operations.length - 1)];
  const number1 = getRandom(0, 100);
  const number2 = getRandom(0, 100);
  const question = `${number1} ${symbol} ${number2}`;
  const answer = String(calculateExpression(number1, number2, symbol));
  return [question, answer];
};

export default () => runGameEngine(description, getQuestionAndAnswer);
