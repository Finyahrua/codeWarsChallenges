function spinWords(input) {
  const splitedWords = input.split(" ");
  const newSentence = [];
  splitedWords.forEach((word) => {
    if (word.length > 4) {
      var splitString = word.split("");

      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      word = joinArray;
    }
    newSentence.push(word);
  });
  const joinedNewSentence = newSentence.join(" ");
  return joinedNewSentence;
}

spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");
