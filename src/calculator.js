const calculator = (() => {
  const add = (...args) => {
    if (args.length > 2 || args.length < 2) {
      throw new Error('Too few / too many arguments');
    }
    return args[0] + args[1];
  };

  const substract = (...args) => {
    if (args.length > 2 || args.length < 2) {
      throw new Error('Too few / too many arguments');
    }
    return args[0] - args[1];
  };
  const divide = (...args) => {
    if (args.length > 2 || args.length < 2) {
      throw new Error('Too few / too many arguments');
    }
    return args[0] / args[1];
  };
  const multiply = (...args) => {
    if (args.length > 2 || args.length < 2) {
      throw new Error('Too few / too many arguments');
    }
    return args[0] * args[1];
  };

  return { add, substract, divide, multiply };
})();

export default calculator;
