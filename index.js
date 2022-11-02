const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2')
const table = require('console.table');

//connection for our database
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

  function startPrompt(){ //initial prompt that starts the program, lets user choose what they want to do
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
    //based on user choice, can switch to whatever they select. function will be executed
      switch(response.choice) {
       case "View All Departments":
          viewAllDepartments();
         break;
       case "View All Roles":
          viewAllRoles();
         break;
       case "View All Employees":
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
          quit()
       }
    })
  }

  //began to write function to add the employee, lines 64-107
// function addEmp(){
// //   let empArr = [];
// //   db.query('SELECT name FROM department;', (err, res) => {
// //     if (err) throw err
// //     res.map(function({ name }) {empArr.push(name)})
// //     empQuestions();
// //   })
// // }
function empQuestions(){
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
        choices: empArr
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

//function to view all departments
 function viewAllDepartments(){
  db.query('SELECT * FROM department;', (err, res) => {
    console.table(res)
    startPrompt();
  })
}

//function to view all roles
 function viewAllRoles(){
  db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;', (err, res) => {
    console.table(res)
    startPrompt();
  })
 }

//function to view all employee
 function viewAllEmp(){
  //long join statement
  db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", (err, res) => {
    console.table(res)
  startPrompt();
  }) 
}

//function to add role for the database
 function addRole(){
  let deptArr = [];
  db.query('SELECT name FROM department;', (err, res) => {
    if (err) throw err
    res.map(function({ name }) {deptArr.push(name)})
    roleQuestions(); //call the roleQuestions function here to prompt the user regarding role questions

  })

function roleQuestions(){
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'role',
        message: "What is the name of the role?"
      },
      {
        type: 'input',
        name: 'salary',
        message: "What is the salary?"
      },
      {
        type: 'list',
        name: 'department',
        message: "What department?",
        choices: deptArr  //declared as an empty string in addRole function, stored as a value
      }
    ]
  )
  .then((answer) => {
    let deptId = [];
    let id
    db.query(`SELECT id FROM department WHERE name = "${answer.department}";`, (err, res) => {
      if (err) throw err
      res.map(function({ id }) {deptId.push(id)})
      id = deptId.toString()
      roleInsert();

    })
    function roleInsert(){
    db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${answer.role}", ${answer.salary}, ${id})`)
    setTimeout(startPrompt, 200)  
    }
  })
}
}

 function updateEmpRole(){
  inquirer.prompt(
    [
      {
        type: 'list',
        name: 'selectedEmployee',
        message: 'Which employee would you like to update?'
      }
    ]
  )
  .then((answer) => {
    let savedValue = answer.selectedEmployee
    console.log(savedValue)
  })
  startPrompt();
 }


 //function to add the department to the database
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
  .then((answer) => {
    //database query to insert user input into the creation of a new department
    db.query(`INSERT INTO department(name) VALUES ("${answer.newDepartment}")`,(err, res) => {
      if (err) throw err
      console.log(`added ${answer.newDepartment}`)
      startPrompt();
    }
    )
  })
 }

 //function to quit the command line terminal
 function quit(){
  process.exit();
 }

 startPrompt();