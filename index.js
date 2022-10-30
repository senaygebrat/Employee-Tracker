const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2')

  const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'UNDECLARED_db'
    },
      console.log(`Connected to the UNDECLARED_db database.`)
  );

  function startPrompt(){
    inquirer.prompt([{
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [" View all departments", "View all roles", "View all employees", "Add a department"
      ]
    }

    ])
  }