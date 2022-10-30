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
    inquirer.prompt([{
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [" View all departments", "View all roles", "View all employees", 
                "Add a department", "Add a role", "add an employee", "Update an employee role"]
    }
    ])
    .then((response) => {
      switch(input.choice) {
        case "View all departments":
          viewDepartments();
      }
    })
  }