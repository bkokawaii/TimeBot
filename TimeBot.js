const Twit = require("twit");

require("dotenv").config();

const config = require("./config.js");

var T = new Twit(config);

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
const beginDateGenerate = () => {
  var today = new Date();
  var pastDate = today.getDate() - 7;
  today.setDate(pastDate);
  var date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  return date;
};

const endDateGenerate = () => {
  var today = new Date();
  var pastDate = today.getDate() - 1;
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
      "Please tweet these numbers to @bkkawaii between " +
      beginDateGenerate() +
      " and " +
      endDateGenerate() +
      ": " +
      diceRolls() +
      " #TimeTravel #TimeTravelBot"
  });
}
