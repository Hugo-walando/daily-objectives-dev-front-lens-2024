const isEven = (a) => {
  if (a >= 0) {
    if (a === 0) {
      return true;
    } else if (a === 1) {
      return false;
    } else {
      a -= 2;
      return isEven(a);
    }
  } else {
    return "Please enter a positive number";
  }
};

console.log(isEven(102));

//Result true
