INSERT INTO role (id, title)
VALUES (001, 'Software Engineer'),
       (002, 'Accountant'),
       (003, 'Lawyer'),
       (004, 'Manager'),
       (005, 'Legal Team Lead'),
       (006, 'Lead Engineer'),
       (007, 'Sales Lead');

INSERT INTO department (id, name)
VALUES      (001, 'Engineering'),
            (002, 'Finance'),
            (003, 'Legal'),
            (004, 'Management'),
            (005, 'Legal'),
            (006, 'Engineering'),
            (007, 'Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES      (001, 'Software Engineer', 120000, 001),
            (002, 'Accountant', 125000, 002),
            (003, 'Lawyer', 190000, 003),
            (004, 'Manager', 100000, 004),
            (005, 'Legal Team Lead', 250000, 003),
            (006, 'Sales Lead', 100000, 007),
            (007, 'Lead Engineer', 150000, 001),
            (008, 'Account Manager', 160000, 002);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
            (001, 'Senay', 'Gebrat', 001),
            (002, 'Farley', 'Chicken', 002, 005),
            (003, 'Beniam', 'Gebrat', )

