function squareDigits(num) {
    let numString = num.toString();
    let newNum = "";
    for (let i = 0; i < numString.length; i++) {
        newNum += Math.pow(numString[i], 2);

    }
  return parseInt(newNum);
}

console.log(squareDigits(9119));
console.log(squareDigits(12345));