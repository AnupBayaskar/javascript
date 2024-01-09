let array = [11, 22, 33, 44, 55, 66, 77];
console.log(`Traversing an array using for in loop..`);
for (const index in array) {
   console.log(array[index]);
}

console.log(`Traversing an array using for of loop..`);
for (const element of array) {
   console.log(element); 
}
let arrayNum = [4, 5, 6, 7, 3]
console.log(`Traversing an array using for of loop..`);
let sum = 0;
for (const element of arrayNum) {
    sum = sum + arrayNum[element] 
}console.log(sum);

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
console.log(`Vowels count is: ${count}`);