// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// variable declarations
const employeesArray = [];
let isCollectingData = true;

// Collect employee data
const collectEmployees = function () {
  let employees = {
    firstName: "",
    lastName: "",
    salary: "",
  };
  let firstName = prompt("Enter the employee's first name:");
  let lastName = prompt("Enter the employee's last name:");
  let salary = prompt("Enter the employee's salary:");
  employees.firstName = firstName;
  employees.lastName = lastName;
  // make sure that salary is float and not a string
  employees.salary = parseFloat(salary);
  employeesArray.push(employees);
  console.log(employeesArray);
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // initialize variables for the function
  let totalSalary = 0;
  let averageSalary = 0;
  let numberOfEmployees = employeesArray.length;
  // loop through the array and calculate the total salary
  for (let i = 0; i < numberOfEmployees; i++) {
    totalSalary += employeesArray[i].salary;
  }
  // calculate the average salary
  averageSalary = totalSalary / employeesArray.length;

  return console.log(`The average salary is ${averageSalary}`);
};

const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = Math.floor(Math.random() * (employeesArray.length + 1));
  console.log(employeesArray[randomEmployee]);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
