const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(
  `****************************  STEP 01  *****************************`
);
console.log(`The Given Array is ${arrayNumber}`);
console.log(`Total element available in array is => ${arrayNumber.length}`);
console.log(
  `****************************  STEP 02  *****************************`
);
console.log(`The Given Array is ${arrayNumber}`);
console.log(`The First element in array is => ${arrayNumber[0]}`);
console.log(
  `The Last element in array is => ${arrayNumber[arrayNumber.length - 1]}`
);
console.log(
  `****************************  STEP 03  *****************************`
);
console.log(`The Given Array is ${arrayNumber}`);
console.log(
  `The Last third element in array is => ${arrayNumber[arrayNumber.length - 3]}`
);
console.log(
  `****************************  STEP 04  *****************************`
);
console.log(`The Given Array is ${arrayNumber}`);
console.log(`Even no in this Given array =>`);
for (const element of arrayNumber) {
  if (element % 2 == 0) {
    const evenNo = element;
    console.log(evenNo);
  }
}
console.log(
  `****************************  STEP 05  *****************************`
);
console.log(`The Given Array is ${arrayNumber}`);
console.log(`Odd no in this Given array => `);
for (const element of arrayNumber) {
  if (element % 2 != 0) {
    const oddNo = element;
    console.log(oddNo);
  }
}
console.log(
  `****************************  STEP 06  *****************************`
);
console.log(`The Given Array is ${arrayNumber}`);
sumOfEven = 0;
for (const evenSum in arrayNumber) {
  if (evenSum % 2 == 0) {
    sumOfEven = sumOfEven + arrayNumber[evenSum];
  }
}
console.log(`Sum of total Even position element in given array is => ${sumOfEven}`);

console.log(
    `****************************  STEP 07  *****************************`
  );
  console.log(`The Given Array is ${arrayNumber}`);
sumOfOdd=0
for (const oddsum in arrayNumber) {
    if (oddsum%2!=0) {
        sumOfOdd=sumOfOdd+arrayNumber[oddsum]
    }
}console.log(`Sum of total ODD position element in given array is => ${sumOfOdd}`);

console.log(
    `****************************  STEP 08  *****************************`
  );
  console.log(`The Given Array is ${arrayNumber}`);
  sumofAllElement = 0
  for (const element in arrayNumber) {
   sumofAllElement=sumofAllElement+arrayNumber[element]
  }
  console.log(`Sum of total element in given array is => ${sumofAllElement}`);

  console.log(
    `****************************  STEP 09  *****************************`
  );
  console.log(`The Given Array is ${arrayNumber}`);
  console.log(`This element is multiply by 5 in this given array => `)
  for (const element of arrayNumber) {
    if (element%5==0) {
        let num = element
        console.log(num);
    }
  }

  console.log(
    `****************************  STEP 10  *****************************`
  );
  console.log(`The Given Array is ${arrayNumber}`);
  const found = arrayNumber.includes(115)
  console.log(`Is 115 Available in this Given array => ${found}`);

  console.log(
    `****************************  STEP 11  *****************************`
  );
  console.log(`The Given Array is ${arrayNumber}`);
  const find = arrayNumber.includes(23)
  console.log(`Is 23 Available in this Given array => ${find}`);

  console.log(
    `****************************  STEP 12  *****************************`
  );
  const newArray = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11] 
  console.log(`The Given Array is ${newArray}`);
  newArray.splice(3,0,55,66)
  console.log(`After inserting element in this given array is => ${newArray}`);

  console.log(
    `****************************  STEP 13  *****************************`
  );
  console.log(`The Given Array is ${arrayNumber}`);
   arrayNumber.splice(4,3)
   console.log(`After deleting 3 element start from 4th index in this given array is => ${arrayNumber}`);


