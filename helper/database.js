const db = require('.../config/connection');

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllDepartments() {
        return this.connection.query('SELECT * FROM department');
    }

    viewAllRoles() {
        return this.connection.query(
            "SELECT * FROM roles JOIN department ON department ON department.id = roles.department_id"
            );
    }

    ViewAllEmployees() {
        return this.connection.query(
            "SELECT * FROM employees JOIN roles ON roles.id = employees.roles_id JOIN department ON roles.department_id = department.id JOIN employees e ON e.id = employees.manager_id"
        );
    }

    addDepartment(departmentName) {
        return this.connection.query(
            "INSERT INTO departments SET name = ?",
            [title, salary, department_id]
        );
    }

    addRole(title, salary, department_id) {
        return this.connection.query(

        );
    }

    addEmployee(firstName, lastName, role_id, manager_id) {

    }
}

const database = new Database(db);

module.exports = database;