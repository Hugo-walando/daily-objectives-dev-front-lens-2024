const range = (start, end, step) => {
  let array = [start];
  if (start > end && step < 0) {
    while (start + step >= end) {
      array.push((start += step));
    }
    return array;
  } else if (start < end && step > 0) {
    while (start + step <= end) {
      array.push((start += step));
    }
    return array;
  } else {
    return "Be sure to enter right step number";
  }
};

console.log(range(10, 20, 1));

console.log(range(5, 1, -1));

const sum = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};

console.log(sum([2, 6, 8, 8]));
