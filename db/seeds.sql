INSERT INTO department (id, name)
VALUES      (001, 'Engineering'),
            (002, 'Finance'),
            (003, 'Legal'),
            (004, 'Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES      (010, 'Software Engineer', 120000, 001),
            (012, 'Accountant', 125000, 002),
            (014, 'Lawyer', 190000, 003),
            (016, 'Legal Team Lead', 250000, 003),
            (018, 'Sales Lead', 100000, 004),
            (020, 'Lead Engineer', 150000, 001),
            (022, 'Account Manager', 160000, 002),
            (024, 'Salesman', 80000, 004);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES      (21, 'Senay', 'Gebrat', 010, 020),
            (32, 'Bugs', 'Bunny', 012, 022),
            (68, 'Daffy', 'Duck', 014, 016),
            (47, 'Snow', 'White', 016, 018),
            (12, 'Mickey', 'Mouse', 018, null),
            (23, 'Donald', 'Duck', 020, null), 
            (17, 'Minnie', 'Mouse', 022, null), 
            (44, 'Lola', 'Bunny', 024, null); 
