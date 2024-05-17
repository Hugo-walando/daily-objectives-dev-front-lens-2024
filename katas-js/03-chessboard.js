const chessBoard = (width, height) => {
  let board = "\n";
  for (let i = 0; i <= height; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j <= width; j++) {
        if (j % 2 == 0) {
          board += "#";
        } else {
          board += " ";
        }
      }
    } else {
      for (let j = 0; j <= width; j++) {
        if (j % 2 != 0) {
          board += "#";
        } else {
          board += " ";
        }
      }
    }
    board += "\n";
  }
  return board;
};

console.log(chessBoard(5, 8));

// <!-- Result: "
// # # #
//  # # #
// # # #
//  # # #
// # # #
//  # # #
// # # #
//  # # #
// # # #
// " -->
