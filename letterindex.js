function countLetters (string) {

letterarray = string.split("")

obj = {}

for (i = 0; i < letterarray.length; i++) {
  if (letterarray[i] !== " ") {
    if(obj[letterarray[i]] === undefined) {
      obj[letterarray[i]] = [i];
    } else {
      obj[letterarray[i]].push(i);
}
}
}
console.log(obj)
}

countLetters("this is my test string with lots of letters");

//  object[name] = "brandon"