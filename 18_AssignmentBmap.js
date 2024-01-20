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

console.log(`\n---------------------------step 01--------------------------`);

const salaryOfAllEmp = allEmployee.map((emp)=>{
    return emp.emp_salary;
});

console.log(`All employee salary => [${salaryOfAllEmp}]`);

console.log(`\n---------------------------step 02--------------------------`);
const allDepartments = allEmployee.map((emp) => {
    return emp.emp_dept;
});
console.log(`List of all Departments => [${allDepartments}]`);
const departments=[...new Set(allDepartments)] 
console.log(`After merge duplicates list of all Departments => [${departments}]`);
console.log(`\n---------------------------step 03--------------------------`);
const allIds = allEmployee.map((emp)=>{
    return emp.emp_id;
});  

console.log(`List of all employees ID's =>[${allIds}]`);

