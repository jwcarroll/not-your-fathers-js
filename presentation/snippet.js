const addForwardSlash = (str) => {
  return /^\//g.test(str) ? str : `/${str}`;
};

export function snippet(fileName) {
  return require(`raw-loader!../app${addForwardSlash(fileName)}`);
}
