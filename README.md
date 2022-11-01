# Employee-Tracker

SELECT * FROM job_db.department

SELECT department.id, department.name FROM department;

SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee;

SELECT employee.first_name, employee.last_name FROM employee