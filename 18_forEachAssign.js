
class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`Employee ID => ${this.emp_id}, Employee Name => ${this.emp_name}, Employee Department => ${this.emp_dept}, Employee Salary => ${this.emp_salary}, Employee Company => ${this.emp_company}`);
    }
}

const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const allEmployee= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`***************************  STEP  01  **************************************`);
console.log(`TCS company emplyee =>`);
allEmployee.forEach((elemet)=>{
if (elemet.emp_company == "TCS") {
    console.log(` Name => ${elemet.emp_name}  Company Name => ${elemet.emp_company}`);
}
})

console.log(`***************************  STEP  02  **************************************`);
console.log(`Employee whose having salery is greater than equel to "50,000"`);
allEmployee.forEach((elemet)=>{
if (elemet.emp_salary >= 50000) {
    console.log(elemet);
}
})
console.log(`***************************  STEP  03  **************************************`);
console.log(`Total of all emplyee salery`);
sum = 0
allEmployee.forEach((elemet)=>{
sum = sum + elemet.emp_salary
})
console.log(sum);

console.log(`***************************  STEP  04  **************************************`);
console.log(`Average salery of all employee is =>`);
avgsalery = 0
allEmployee.forEach(()=>{
    avgsalery = sum/allEmployee.length
})
console.log(avgsalery);

console.log(`***************************  STEP  05  **************************************`);
console.log(`Employe whose having Department IT and HR and this employe salery is greater than "75,000" =>`);
allEmployee.forEach((elemet)=>{
if (elemet.emp_dept=="IT" && elemet.emp_dept=="HR" || elemet.emp_salary>=75000) {
    console.log(elemet);
}
})