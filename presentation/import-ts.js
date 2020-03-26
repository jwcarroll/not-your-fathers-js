const addForwardSlash = (str) => {
  return /^\//g.test(str) ? str : `/${str}`;
};

export function importTs(fileName) {
  return `/app/compiled${addForwardSlash(fileName).replace(".ts", ".js")}`;
}
