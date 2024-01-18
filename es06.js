const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const uniqueArray = [];

for (let i = 0; i < arrayNum.length; i++) {
  if (uniqueArray.indexOf(arrayNum[i]) === -1) {
    // If the element is not already in the uniqueArray, add it
    uniqueArray.push(arrayNum[i]);
  }
}

console.log(uniqueArray);
