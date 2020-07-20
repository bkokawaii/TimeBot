const diceRolls = () => {
  let numberArray = [];
  for (let i = 0; i < 12; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    numberArray.push(randomNum);
  }
  return numberArray;
};
const dateGenerate = () => {
  var today = new Date();
  var pastDate = today.getDate() - 7;
  today.setDate(pastDate);
  var date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  return date;
};

console.log(
  "Please tweet these numbers to @bkkawaii on " +
    dateGenerate() +
    ": " +
    diceRolls() +
    " #TimeTravel"
);
