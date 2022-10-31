INSERT INTO department (id, name)
VALUES      (001, 'Engineering'),
            (002, 'Finance'),
            (003, 'Legal'),
            (004, 'Sales');

INSERT INTO role (title, salary, department_id)
VALUES      ('Software Engineer', 120000, 001),
            ('Accountant', 125000, 002),
            ('Lawyer', 190000, 003),
            ('Legal Team Lead', 250000, 003),
            ('Sales Lead', 100000, 004),
            ('Lead Engineer', 150000, 001),
            ('Account Manager', 160000, 002),
            ('Salesman', 80000, 004);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES      ('Senay', 'Gebrat', 010, 020),
            ('Bugs', 'Bunny', 012, 022),
            ('Daffy', 'Duck', 014, 016),
            ('Snow', 'White', 016, 018),
            ('Mickey', 'Mouse', 018, null),
            ('Donald', 'Duck', 020, null), 
            ('Minnie', 'Mouse', 022, null), 
            ('Lola', 'Bunny', 024, null); 
