function checkEligibility(gender, age) {
  console.log(`Gender :- ${gender}   Age:- ${age}`);
  if (age <= 0 || age == null || age == undefined || isNaN(age)) {
    console.log(`Sorry, You Are Entered Invalid Key`);
  } 
  else if ((gender == "male" && age >= 21) || (gender == "female" && age > 18)) {
    console.log(`Yes You Are eligible For Marriage`);
  } else {
    console.log(`Sorry You Are not Eligible `);
  }
}
checkEligibility("male", 17);
console.log(`*************************************`);
checkEligibility("male", 25);
console.log(`*************************************`);
checkEligibility("female", 28);
console.log(`*************************************`);
checkEligibility("female", 16);
console.log(`*************************************`);
checkEligibility("other", 35);
console.log(`*************************************`);
checkEligibility("other", 41);
console.log(`*************************************`);
checkEligibility("xyz",-100 );
console.log(`*************************************`);


