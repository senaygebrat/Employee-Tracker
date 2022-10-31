const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2')
const table = require('console.table')

  const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'spiral408',
      database: 'job_db'
    },
      console.log(`Connected to the job_db database.`)
  );

db.query('SELECT * FROM job_db.department', (err, res) => {
  console.log(res)
  db.end;
})

  function startPrompt(){
    inquirer.prompt(
      [
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: ["View All Departments", "View all Employees", "View All Employees by Department", 
                    "View All Employees by Manager", "Add an Employee", "Remove Employee", 
                    "Update Employee Role", "Update Employee Manager", "Add Department", 
                    "Remove Department", "Quit"
                   ]
        }
      ]
      )
    .then((response) => {
      switch(response.choice) {
        case "View all Departments":
          db.query('SELECT * FROM job_db.department', (err, res) => {
            console.log(res)
            db.end;
        })
        break;
      case "View all Employees":
        viewAllEmp();
        break;
      case "View all Employees by Department":
        viewAllEmpByDept();
        break;
      case "View All Employees by Manager":
        viewAllEmpByManager()
        break;
      case "Add an Employee":
        AddEmp();
        break;
      case "Remove Employee":
        removeEmp();
        break;
      case "Update Employee Role":
        updateEmpRole();
        break;
      case "Update Employee Manager":
        updateEmpManager();
        break;
      case "Add Department":
        addDepartment()
        break;
      case "Remove Department":
        removeDepartment();
        break;
      case "Quit":
    }
})}

function addEmp(){
   inquirer.prompt(
    [
      {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
      },
      {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
      },
      {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Salesman', 'Sales Lead', 'Software Engineer', 'Accountant', 
                  'Lawyer', 'Legal Team Lead', 'Lead Engineer', 'Account Manager']
      },
      {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: ['None', 'Mickey Mouse', 'Donald Duck', 'Minnie Mouse', 'Lola Bunny']
      },
      {
        type: 'list',
        name: 'next',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Employees by Department', 'Add Employee', 
                  'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'Quit']
      }
    ])
   .then((response) => {
   })
 }

 function viewAllEmp(){
 }

 function viewAllEmpByDept(){
 }

 function viewAllEmpByManager(){
 }

 function removeEmp(){
 }

 function updateEmpRole(){
 }

 function updateEmpManager(){
 }

 function addDepartment(){
 }

 function removeDepartment(){
 }
