console.log(`----------------------------------------------------Array Assign---------------------------------------------------------- \n`);

const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is :- "${fruits_seasonal}"\n`);

console.log(`----------------------------------------------------Step 1---------------------------------------------------------- \n`);
const firstElement=fruits_seasonal[0];
console.log(`First Element is : '${firstElement}'`);

const lastElement=fruits_seasonal[fruits_seasonal.length-1]
console.log(`Last Element is : '${lastElement}'\n`);

console.log(`----------------------------------------------------Step 2---------------------------------------------------------- \n`);

const fruits_seasonal1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal1}"`);

fruits_seasonal1.unshift("Papaya")
console.log(`After Adding 'Papaya' array is: '${fruits_seasonal1}'\n`);

console.log(`----------------------------------------------------Step 3---------------------------------------------------------- \n`);

const fruits_seasonal2=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal2}"`);

fruits_seasonal2.splice(3,1);
console.log(`After removing 'Mango' array is: '${fruits_seasonal2}'\n`);

console.log(`----------------------------------------------------Step 4---------------------------------------------------------- \n`);

const fruits_seasonal3=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal3}"`);

fruits_seasonal3.push('Pineapple');
console.log(`After adding 'Pineapple' at last array is: '${fruits_seasonal3}'\n`);

console.log(`----------------------------------------------------Step 5---------------------------------------------------------- \n`);

const fruits_seasonal4=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal4}"`);

fruits_seasonal4.splice(4,0,'Dragon Fruit');
console.log(`After adding 'Dragon fruit' before 'Water Melon' array is: '${fruits_seasonal4}'\n`);

console.log(`----------------------------------------------------Step 6---------------------------------------------------------- \n`);

const fruits_seasonal5=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal5}"`);

fruits_seasonal5.splice(1,1,'Kiwi');
console.log(`After replacing 'Orange' with 'Kiwi' array is: '${fruits_seasonal5}'\n`);

console.log(`----------------------------------------------------Step 7---------------------------------------------------------- \n`);

const fruits_seasonal6=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal6}"`);

const slicedArray=fruits_seasonal6.slice(1,4);
console.log(`Element starting from index 1 to 4 Subarray is: '${slicedArray}'\n`);


console.log(`----------------------------------------------------Step 8---------------------------------------------------------- \n`);

const fruits_seasonal7=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal7}"`);

const slicedArray1=fruits_seasonal6.slice(fruits_seasonal7.length-3);
console.log(`Last 3 elements of array is: '${slicedArray1}'\n`);

console.log(`----------------------------------------------------End------------------------------------------------------------- \n`);
