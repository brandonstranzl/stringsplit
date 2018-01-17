function countLetters (string) {

letterstring = string.split(" ").join("");
letterarray = letterstring.split("");

obj = {}

for (i = 0; i < letterarray.length; i++) {
  if(obj[letterarray[i]] !== undefined) {
    obj[letterarray[i]] += 1
  } else {
    obj[letterarray[i]] = 1}
}
console.log(obj)
}

countLetters("this is my test string with lots of letters");