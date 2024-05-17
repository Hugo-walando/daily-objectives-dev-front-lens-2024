const checkB = (string) => {
  array = string.split("");
  let sum = 0;
  array.forEach((letter) => {
    if (letter === "B") {
      sum++;
    }
  });
  return sum;
};

console.log(checkB("BaheaBahr"));

const checkChar = (string, Char) => {
  array = string.split("");
  let sum = 0;
  array.forEach((letter) => {
    if (letter === Char) {
      sum++;
    }
  });
  return sum;
};

console.log(checkChar("BaheaBahr", "a"));
