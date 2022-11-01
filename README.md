# Employee-Tracker

SELECT * FROM job_db.department

SELECT department.id, department.name FROM department;

SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee;

SELECT employee.first_name, employee.last_name FROM employee



SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee;


++job title, department, and salary









join/inner join
select * from employee join role on employee.role_id = role.id
jenny Minnie 15 president

left join
select * from employee left join role on employee.role_id = role.id
john johnson 10 null
jenny Minnie 15 president

right join
select * from employee right join role on employee.role_id = role.id
null         null vice-president
jenny Minnie 15   president

outer join
select * from employee outer join role on employee.role_id = role.id
john johnson 10 null
null         null vice-president