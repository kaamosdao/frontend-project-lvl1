import readlineSync from 'readline-sync';
// common pattern logic, that is used in every game
const runPattern = (task, data, result) => {
  // greeting user and showing him task
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  // asking question to user and compare its answer with correct
  for (let counter = 0; counter < 3; counter += 1) { // check: 3 answers in a row should be correct
    // generating question for user and its answer
    const question = data();
    const correctAnswer = result(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(answer) === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runPattern;
