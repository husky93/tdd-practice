const shiftChar = (code, key, min, max) => {
  let shifted = code + key;
  if (shifted > max) {
    const keyRest = shifted - max;
    shifted = min - 1 + keyRest;
  }
  return shifted;
};

const ceasarCipher = (string, key) => {
  if (key > 25) {
    throw new Error('Key value is too big, max 25');
  }
  if (!string && !key) {
    throw new Error('Need to specify at least one argument');
  }
  if (!key) {
    return string;
  }
  if (typeof string !== 'string' || typeof key !== 'number') {
    throw new Error('Wrong arguments type. Need to be: sting, number');
  }
  const array = string.split('');
  const encrypted = array.map((char) => {
    const ascii = char.charCodeAt();
    if (ascii >= 97 && ascii <= 122) {
      return shiftChar(ascii, key, 97, 122);
    }
    if (ascii >= 65 && ascii <= 90) {
      return shiftChar(ascii, key, 65, 90);
    }
    return ascii;
  });

  return String.fromCharCode(...encrypted);
};

export default ceasarCipher;
