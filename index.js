// code your solution here
function superbowlWin(records) {
    const game = records.find((record) => record.result === "W");
    return game ? game.year : undefined;
  }