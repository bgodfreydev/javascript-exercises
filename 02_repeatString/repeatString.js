const repeatString = function (word, count) {
  let newString = "";
  if (count < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < count; i++) {
      newString = newString + word;
    }
    return newString;
  }
};

// Do not edit below this line
module.exports = repeatString;
