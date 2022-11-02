# Employee-Tracker


## About Employee-Tracker
Command line terminal that accepts user input and allows you interact with the employees, departments, and roles.

## Code Snippet
Adding the new role was a multi-step process. First we create a function addRole(), declare an empty array, and query our database.
```
 function addRole(){
  let deptArr = [];
  db.query('SELECT name FROM department;', (err, res) => {
    if (err) throw err
    res.map(function({ name }) {deptArr.push(name)})
    roleQuestions();

  })
```

The next function below prompts the user with questions regarding the role.
```
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
        choices: deptArr
      }
    ]
  )
```

Here is the final section that has another database query and inserts the newly declared role. We will initiate the function of startPrompt() to redirect the user to the main menu.
```
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
```

## Technologies Used
JavaScript, MySQL

## Author Links
[LinkedIn](https://www.linkedin.com/in/senayg/)
[Github](https://github.com/senaygebrat)