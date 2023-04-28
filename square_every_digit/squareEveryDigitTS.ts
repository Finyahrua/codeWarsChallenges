function squareDigitsTs(num: number): number {
  let numString: string = num.toString();
  let newNum: string = "";
  for (let i: number = 0; i < numString.length; i++) {
    newNum += Math.pow(parseInt(numString[i]), 2).toString();
  }
  return parseInt(newNum);
}
console.log(squareDigitsTs(9119));
console.log(squareDigitsTs(12345));
