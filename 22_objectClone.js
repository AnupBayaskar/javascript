console.log(`************************ STEP 01 ********************`);
const arrayNums = [20,3,4,56,90,400,49]
console.log(`Original Array is :- ${arrayNums}`);
const cloneArray = arrayNums;
cloneArray.push(55,66)
console.log(`After Performing Push on clone array :- ${cloneArray}`);
console.log(`After Performing Original  Array will be updated :- ${arrayNums}`);
console.log(`************************ STEP 02 ********************`);
const arrayNums1 = [20,3,4,56,90,400,49]
console.log(`Original Array is :- [${arrayNums1}]`);
const deepArray = [...arrayNums1]
arrayNums1.splice(arrayNums1.indexOf(90),0,10,25);
console.log(`Adding 10,25 Befor elment 90 original array :- ${arrayNums1}`);
console.log(`deep cloned array is :- ${deepArray}`);
console.log(`************************ STEP 03 ********************`);
const arrayNums2 = [20,3,4,56,90,400,49];
const arrayEven = [2,30,14,8];
const mergeArray = [...arrayNums2,...arrayEven]
console.log(`Original Array is :- ${arrayNums2} And arrayEven is :- ${arrayEven}`);
console.log(`merge array is ${mergeArray} `);
console.log(`************************ STEP 04 ********************`);
const employee_info ={
    emp_id :27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,000INR",
        aug_month : "50,000INR",
        jun_month : "65,000INR"
    },
    address :{
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles : ["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}
console.log(`************************ STEP 05 ********************`);
console.log(`===============  A  ==================`);
console.log(`Employee ${employee_info.emp_name} Address is :- ${JSON.stringify (employee_info.address)}`);
console.log(`===============  B  ==================`);
console.log(`Employee ${employee_info.emp_name} Mobile is ${employee_info.mobiles}`);
console.log(`************************ STEP 06 ********************`);
console.log(`===============  A  ==================`);
const deepCopy = JSON.parse(JSON.stringify(employee_info))
deepCopy.salary.july_month = `80,000INR`
console.log(`original salery on obj :- ${employee_info.salary.july_month}`);
console.log(`cloned salery on obj  :- ${deepCopy.salary.july_month}`);
console.log(`===============  B  ==================`);
console.log(`Original country is :=> ${employee_info.address.country}`);
employee_info.address.country = "United kingdom";
console.log(`Updated country is :=> ${employee_info.address.country}`);
console.log(`===============  C  ==================`);
console.log(`Original obj => ${JSON.stringify(employee_info)}`);
console.log(`\nCloned obj => ${JSON.stringify(deepCopy)}`);
