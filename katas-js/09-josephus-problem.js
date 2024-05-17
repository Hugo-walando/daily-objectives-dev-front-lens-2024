const josephusSurvivor = (n, k) => {
  let prisoners = [];
  let indexCount = k - 1;
  for (let i = 1; i <= n; i++) {
    prisoners.push(i);
  }
  while (prisoners.length !== 1) {
    if (prisoners.length <= indexCount) {
      indexCount = indexCount - prisoners.length;
    } else {
      prisoners.splice(indexCount, 1);
      indexCount += k - 1;
    }
  }
  return prisoners;
};

console.log(josephusSurvivor(8, 2));
