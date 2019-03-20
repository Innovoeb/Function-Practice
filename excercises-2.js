// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------
var max = (a, b) => {
  if (a > b) {
    return a;
  }
  else (b > a)
    return b;
  }

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------

var maxOfThree = (x, y, z) => Math.max(x, y, z);

console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------

var isVowel = (x) => {

  if (x.length === 1) {
   return /[aeiou]/i.test(x);
 }
 else (x.length === 1)
   return /^[aeiou]/i.test(x);
 }


console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------

var rovarspraket = (str) => {

  if(typeof str !== 'string'){
  return str + ''
}

  let string = "";

  let i;


  for (i = 0; i < str.length; i++) {
    if (isVowel(str[i])){
      string += str[i]

    }else {string += str[i] + "o" + str[i];}

  }

  return string;
}




console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------

var reverse = (str) => {

  let string = "";

  for (i = 0; i < str.length; i++) {
    string = str[i] + string;
  }

  return string;
}


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")
