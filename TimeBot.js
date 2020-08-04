var Twit = require("twit");

var T = new Twit({
  consumer_key: "dAYkdicZuh8LNYuRlIOtnhNRe",
  consumer_secret: "e8GfvwnPLkJC9lmmVIyeX9MBmaMyzhjoAsaSTVpMOYnAs1Uokj",
  access_token: "197425242-vLXkV5cLGyBVuMAGSebTYX3ZGPyci4KXxVVaQsOe",
  access_token_secret: "Zsto7xgXeYD9kF3yFvnlbptkLh2OTXoLS9PTrI2aqXLQW"
});
T.get(
  "account/verify_credentials",
  {
    include_entities: false,
    skip_status: true,
    include_email: false
  },
  onAuthenticated
);

function onAuthenticated(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Authentication successful.");
  }
}

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

function onAuthenticated(err) {
  sendTweet();
}

function sendTweet() {
  T.post("statuses/update", {
    status:
      "Please tweet these numbers to @bkkawaii on " +
      dateGenerate() +
      ": " +
      diceRolls() +
      " #TimeTravel #TimeTravelBot"
  });
}

/* console.log(
  "Please tweet these numbers to @bkkawaii on " +
   dateGenerate() +
 ": " +
 diceRolls() +
  " #TimeTravel #TimeTravelBot"
 );
*/
