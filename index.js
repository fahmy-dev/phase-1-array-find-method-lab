// code your solution here
// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  
  function superbowlWin(gameRecords) {
    function findWin(game) {
        return game.result === "W";
    }
    const winRecord = gameRecords.find(findWin);
  
    if (winRecord) {
        return winRecord.year;
    } else {
        return undefined;
    }
  }  