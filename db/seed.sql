USE employee_db;

INSERT INTO department (name)
VALUES ('Legal')
       ('HR')
       ('Engineering')

INSERT INTO roles (title, salary, department_id)
VALUES ('Lawyer', 150000, 1)
       ('Clerk', 65000, 2)
       ('Engineer', 85000, 3)

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Stockton", 1, NULL),
("James", "Johnson", 2, NULL),
("Laura", "Leeland", 3, 1),
("Tom", "Townsand", 3, NULL),
("Bradley", "Benson", 2, NULL),
("Maria", "Marcus", 1, 2, NULL),
("Nick", "Nauman", 2, 3, NULL),
("Kelly", "Kingston", 1, 4, NULL);