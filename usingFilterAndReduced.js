class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`Employee ID => '${this.emp_id}', Employee Name => '${this.emp_name}', Employee Department => '${this.emp_dept}', Employee Salary => '${this.emp_salary}', Employee Company => '${this.emp_company}'`);
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

console.log(`************************  STEP 01  ****************************`)
allEmployee.filter( element=> element.emp_company=="Wipro").forEach(element => element.getDetails());

console.log(`************************  STEP 02  ****************************`);
const IT_HR_Employees = allEmployee.filter((element)=>{
return element.emp_dept == "IT" || element.emp_dept=="HR"
});
IT_HR_Employees.forEach((element)=>{
element.getDetails();
})

console.log(`*************************************  STEP 03  ***********************************`);
const empId = allEmployee.filter((element)=>{
return element.emp_id > 50  
})
empId.forEach((element)=>{
element.getDetails();
})
console.log(`************************  STEP 04  ****************************`);
const empName = allEmployee.filter((element)=>{
return element.emp_name.startsWith("A")||element.emp_name.startsWith("V")||element.emp_name.startsWith("M")
})
empName.forEach((element)=>{
element.getDetails();
})
console.log(`************************  STEP 05  ****************************`);
const sumOfSalary = allEmployee.reduce((sumSalary,element)=> sumSalary+element.emp_salary,0);
const avarageOfSalary = sumOfSalary/allEmployee.length;
console.log(`Avarage Salary of all employees => ${avarageOfSalary}`);

console.log(`*********************  STEP 06  ***********************`);

const itEmp = allEmployee.filter(element => element.emp_dept=="IT");
const sumItSalary = itEmp.reduce((rt,element) => rt+element.emp_salary,0);
console.log(`Avarage Salary OF 'IT' Department => ${sumItSalary/itEmp.length}`);


