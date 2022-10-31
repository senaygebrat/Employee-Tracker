INSERT INTO department (name)
VALUES      ('Engineering'),
            ('Finance'),
            ('Legal'),
            ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES      ('Software Engineer', 120000, 1),
            ('Accountant', 125000, 2),
            ('Lawyer', 190000, 3),
            ('Legal Team Lead', 250000, 3),
            ('Sales Lead', 100000, 4),
            ('Lead Engineer', 150000, 1),
            ('Account Manager', 160000, 2),
            ('Salesman', 80000, 4);


INSERT INTO employee (first_name, last_name, role_id)
VALUES      ('Senay', 'Gebrat', 1),
            ('Bugs', 'Bunny', 2),
            ('Daffy', 'Duck', 3),
            ('Snow', 'White', 4),
            ('Mickey', 'Mouse', 5),
            ('Donald', 'Duck', 6), 
            ('Minnie', 'Mouse', 7), 
            ('Lola', 'Bunny', 8)

