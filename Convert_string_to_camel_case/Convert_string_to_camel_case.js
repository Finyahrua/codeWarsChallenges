function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

console.log(toCamelCase("the-stealth-warrior"));
console.table(toCamelCase("The-Stealth_warrior"));
