const reverseArray = (array) => {
  let newArray = [];
  array.forEach((el) => {
    newArray.unshift(el);
  });
  return newArray;
};

const reverseArrayInPlace = (array) => {
  let newIndex;
  array.forEach((el, index) => {
    if (index + 1 > array.length / 2) {
      return array;
    } else {
      newIndex = array.length - (index + 1);
      let temp = array[index];
      array[index] = array[newIndex];
      array[newIndex] = temp;
    }
  });
  return array;
};

console.log(reverseArrayInPlace([5, 3, 4, 7, 6, 1, 5]));
