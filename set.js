console.log(`==== WAP to count the vowels from the given string=======`);
const str = "Developer UI and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
count++;
}
}


console.log(`Vowels count is: ${count}`)
let arrayOfFriends = ["Jenny", "Elon", "Bill"];
const result = arrayOfFriends.join(",");
console.log(typeof result);
console.log(result);

arrayOfFriends.reverse();
console.log(arrayOfFriends);
const word = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords.length);
const reverseStr = word.split("").reverse().join("");
console.log(reverseStr);


let array = ["Jenny", "Menny", "Bill"];
// Spread Operator ...
console.log(array); // ['Jenny', 'Menny', 'Bill']
console.log(...array); // Jenny Menny Bill
const newArray =[...array];
console.log(newArray);


let array = [44, 22, 33, 44, 22, 66, 77];

console.log(array);

// Set

 

const setOfRollNum = new Set();
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(33);
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(66);
setOfRollNum.add(77);
console.log(setOfRollNum);
console.log(`Size is: ${setOfRollNum.size} `);
console.log(`Deleting 66`);
setOfRollNum.delete(66);
console.log(setOfRollNum); 
console.log(`Is element available`);
console.log(setOfRollNum.has(22));

console.log(`Traversing set collection....`);
for (const element of setOfRollNum) {
 console.log(element);
}





console.log(`Removing duplicate elements from an array`);

let array = [44, 22, 33, 44, 22, 66, 77];

console.log(array);

 

const newArray = [...new Set(array)];

console.log(newArray);