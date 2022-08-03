const analyzeArray = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Passed argument is not an array');
  }

  let min;
  let max;
  let sum = 0;
  const { length } = array;

  array.forEach((item, index) => {
    if (typeof item !== 'number') {
      throw new Error('All passed array items need to be type of number');
    }
    if (index === 0) {
      min = item;
      max = item;
    }
    if (item < min) min = item;
    if (item > max) max = item;
    sum += item;
  });

  const average = Math.round(sum / length);
  return { average, min, max, length };
};

export default analyzeArray;
