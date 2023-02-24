const inquirer = require('inquirer');
const { async } = require('rxjs');
const database = require('./helper/database');



/* 
1. Menu prompts View all employees, view all departments, view all roles,
add department, add role, add employee
2. User chooses a prompt
    a. view department
        -shows departments
    b. view roles
        -shows roles
    c. view employees
        -shows employees
    d. add department
        -user is prompted again to ask about department i.e. name of department
    e. add role
        -user is prompted again for title, salary, department
    f. add employee
        -user is prompted for first name, last name, role, manager
3.Initial Menu prompt again
*/



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
    switch(answers.userChoice) {
        case 'View all Departments': {
            await viewDepartments();
            await menu();
            break;
        }
        case 'View all Roles': {
          break;
        }
        case 'View all Employees': {
            break;
        }  
        case 'Add a Department': {
            break;
        }
        case 'Add a Roles': {
            break;
        }
        case 'Add an Employee': {
            break;
        }
        default: {
            process.exit(0)
        }
    }
}

async function viewDepartments () {
    const departments = await database.viewAllDepartments();
    console.table(departments)
}

async function viewRoles () {
    const roles = await database.viewAllRoles();
    console.table(roles)
}

async function viewEmployees () {
    const employees = await database.ViewAllEmployees();
    console.table(employees)
}

async function addADepartment() {
    const department = await database.viewAllDepartments();
    const answers = await inquirer 
}
async function addARole() {
    const department = await database.viewAllDepartments();
    const answers = await inquirer 
}
async function addAEmployee() {
    const roles = await database.viewAllRoles();
    const managers  = await inquirer 
}

menu();
