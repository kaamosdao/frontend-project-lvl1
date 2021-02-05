export default (min, max) => {
  const minNumber = min;
  const maxNumber = max + 1;
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};
