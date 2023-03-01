const inquirer = require('inquirer');
const database = require('./helper/database');
const mysql = require('mysql2');
const rxjs = require('rxjs');



async function menu() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee'
            ],
            name: 'userChoice'
        }
    ]);

    switch (answers.userChoice) {
        case 'View all Departments':
            await viewDepartments();
            break;

        case 'View all Roles':
            await viewRoles();
            break;

        case 'View all Employees':
            await viewEmployees();
            break;

        case 'Add a Department':
            await addADepartment();
            break;

        case 'Add a Role':
            await addARole();
            break;

        case 'Add an Employee':
            await addAEmployee();
            break;

        default:
            process.exit(0);
    }

    await menu();
}

async function viewDepartments () {
    const departments = await database.viewAllDepartments();
    console.table(departments);
}

async function viewRoles () {
    const roles = await database.viewAllRoles();
    console.table(roles);
}

async function viewEmployees () {
    const employees = await database.viewAllEmployees();
    console.table(employees);
}

async function addADepartment() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of this new department?',
            name: 'departmentName'
        }
    ]);

    await database.addDepartment(answers.departmentName);
    console.log('Department added successfully');
}

async function addARole() {
    const departments = await database.viewAllDepartments();
    const departmentNames = departments.map((department) => department.name);

    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of the role?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'salary'
        },
        {
            type: 'list',
            message: 'What department does this role belong to?',
            choices: departmentNames,
            name: 'department'
        }
    ]);

    for (let i = 0; i < departments.length; i++) {
        if (answers.department === departments[i].name) {
            await database.addRole(answers.title, answers.salary, departments[i].id);

        }
}
await menu();
}

menu();