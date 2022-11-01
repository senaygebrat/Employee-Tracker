DROP DATABASE IF EXISTS job_db;

CREATE DATABASE job_db;

USE job_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role(id),
  manager_id INT,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  );

select * from employee join role on employee.role_id = role.id

select * from employee left join role on employee.role_id = role.id

employee
john johnson 10
jenny Minnie 15

role
president 15
vice president 14


jvaldez@bootcampspot.com

select employee.first_name, employee.last_name from employee

select first_name, last_name from employee




join/inner join (same thing)
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