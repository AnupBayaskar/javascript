console.log("******************STEP 01*******************");
var isEvenOrOdd = function (num) {
    var returnValue = ""
   if ( num % 2 == 0) {
   returnvalue = "EVEN"
   } else {
        returnvalue = "ODD"
}
   return returnvalue;
}
var result = isEvenOrOdd(45)
console.log(`The Given Number 45 is ${result} number`);
var result = isEvenOrOdd(70)
console.log(`The Given Number 70 is ${result} number`);
var result = isEvenOrOdd(67)
console.log(`The Given Number 67 is ${result} number`);
var result = isEvenOrOdd(98)
console.log(`The Given Number 98 is ${result} number`);

console.log(`******************STEP 02********************`);
var vote = function(age) {
   var returnValue = ""
   if (age >= 18) {
      returnValue = 'Yes you are Eligible'
   }
   else{
      returnValue = 'Sorry, you are notEligible'
   }
   return returnValue
}
var result = vote(18)
console.log(`${result}` );
var result = vote(20)
console.log(`${result}` );
var result = vote(17)
console.log(`${result}` );
var result = vote(40)
console.log(`${result}` );
console.log(`******************STEP 02********************`);
var charCount = function (str) {
   var returnValue = ""
   if (str.length > 10) {
      returnValue = `Yes "${str}" in this word character more than 10`
   }
   else{
      returnValue = `Sorry, "${str}" in this word character no more than 10 `
   }
   console.log(returnValue);
   return returnValue 
}
charCount("Javascript-ES6")
charCount("latitude")

console.log(`************************STEP 04 ***************************`);

var checkStarWord = function (word) {
   var returnValue = ""
     if (word.startsWith("Java")) {
      returnValue = `Yes "${word}" this word start from Java `
   }
   else{
      returnValue = `No "${word}" this word not start from Java`
   }
   console.log(returnValue);
   return returnValue
}
checkStarWord("JavaScript Language")
checkStarWord("MongoDB")