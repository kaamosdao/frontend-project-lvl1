import readlineSync from 'readline-sync';

const isEven = () => {
  // user greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // current task description for user
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(task);

  // code description
  for (let counter = 0; counter < 3; counter += 1) { // check: 3 answers in a row should be correct
    const data = Math.floor(Math.random() * 100); // generate random number
    const condition = data % 2 === 0; // condition if random number is even

    // question for user and its answer
    console.log(`Question: ${data}`);
    const answer = readlineSync.question('Your answer: ');

    // compare answer with correct answer
    const correctAnswer = condition ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default isEven;
