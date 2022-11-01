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
      // console.log(`Connected to the job_db database.`)
  );

// db.query('SELECT * FROM job_db.department', (err, res) => {
//   console.log(res)
//   db.end;
// })

  function startPrompt(){
    inquirer.prompt(
      [
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: ["View All Departments", "View All Roles", "View All Employees", 
                    "Add an Employee", "Add Department", "Add A Role",
                    "Update Employee Role", "Quit"
                   ]
        }
      ]
      )
    .then((response) => {

      // const person = {
      //   first: 'Senay',
      //   last: 'Gebart',
      //   fullName: function() {
      //     return this.first + ' ' + this.last
      //   }
      // }

      switch(response.choice) {
       case "View All Departments":
          viewAllDepartments();
         break;
       case "View All Roles":
          viewAllRoles();
         break;
       case "View all Employees":
          viewAllEmp();
         break;
       case "Add an Employee":
          addEmp();
         break;
       case "Add Department":
          addDepartment();
         break;
       case "Add A Role":
          addRole();
         break;
       case "Update Employee Role":
          updateEmpRole();
         break;
        case "Quit":
          quit();
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


 function viewAllDepartments(){
  db.query('SELECT * FROM department;', (err, res) => {
    console.table(res)
  })
}


 function viewAllRoles(){
  db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;', (err, res) => {
    console.table(res)
  })
 }


 function viewAllEmp(){
  // SELECT employee.first_name, employee.last_name FROM employee
 }



 function addRole(){
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'role',
        message: "What is the name of the role?"
      },
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
        type: 'input',
        name: 'salary',
        message: "What is the salary?"
      },
      {
        type: 'input',
        name: 'department',
        message: "What department?"
      }
    ]
  )
 }


 function updateEmpRole(){
  inquirer.prompt(
    [
      {
        type: 'list',
        message: 'Which employee would you like to update?',
        name: 'selectedEmployee'
      }
    ]
  )
  .then((answer) => {
    let savedValue = answer.selectedEmployee
    console.log(savedValue)
  })
 }


 function addDepartment(){
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'newDepartment',
        message: "What department would you like to add?"
      }
    ]
  )
  .then
 }


 function quit(){
  db.end;
 }

 startPrompt();