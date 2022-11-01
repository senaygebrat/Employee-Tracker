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


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES      ('Senay', 'Gebrat', 1, null),
            ('Bugs', 'Bunny', 2, null),
            ('Daffy', 'Duck', 3, null),
            ('Snow', 'White', 4, null),
            ('Mickey', 'Mouse', 5, 1),
            ('Donald', 'Duck', 6, 2), 
            ('Minnie', 'Mouse', 7, 3), 
            ('Lola', 'Bunny', 8, 4)

