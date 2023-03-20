const stringsSet = new Set();
const testArr = ["one", "two", "three", "four"];

function stringsLoader(source) {
  console.log("The loader is running now.");

  for (i = 0; i < testArr.length; i++) {
    stringsSet.add(testArr[i]);
  }

  return source;
}

stringsLoader.stringsSet = stringsSet;

module.exports = stringsLoader;

stringsLoader.getStringsLoader = (options = {}) => {
  return {
    loader: __filename,
    options,
  };
};
