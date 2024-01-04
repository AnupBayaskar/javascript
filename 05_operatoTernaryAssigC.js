function maleMarriageEligibility(gender,age,boyName) {
    var result = male=age>=21?`hey, ${boyName} you are eligible to marriage`
    :`Unfortunately ${boyName} you Not eligible for marriage please try next time`;
    console.log(result);
}
maleMarriageEligibility("male",25,"Billgates");
maleMarriageEligibility("male",17,"Stew Jobs");

console.log(`******************STEP 02******************`);
function maleMarriageEligibility(gender,age,girlName) {
    var result = female=age>=18?`hey, ${girlName} you are eligible to marriage`
    :`Unfortunately ${girlName} you Not eligible for marriage please try next time`;
    console.log(result);
}
maleMarriageEligibility("female",16,"Janifer");
maleMarriageEligibility("female",27,"Malinda Gates");