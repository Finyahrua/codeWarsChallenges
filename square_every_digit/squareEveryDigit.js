function squareDigitsTS(num) {
    var numString = num.toString();
    var newNum = "";
    for (var i = 0; i < numString.length; i++) {
        newNum += Math.pow(parseInt(numString[i]), 2).toString();
    }
    return parseInt(newNum);
}
console.log(squareDigitsTS(9119));
console.log(squareDigitsTS(12345));
// some random comment