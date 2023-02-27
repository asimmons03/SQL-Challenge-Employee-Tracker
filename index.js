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
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of this new department?',
            name: 'departmentName'
        },
    ]);
    await database.addDepartment(answer.departmentName);
    console.log('Deparment added successfully');
}
async function addARole() {
    const department = await database.viewAllDepartments();
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
            choices: departments,
            name: 'department'
        },
    ]);
    console.log(answers);
    for(let i= 0; i < departments.length; i++ ) {
        if(answers.department === departments[i].name) {
            console.log(departments[i].id);
            await database.addRole(answers.title, answers.salary, departments[i].id);
        }
    }
    console.log("Role added successfully")
}
async function addAEmployee() {
    const roles = await database.viewAllRoles();
    const managers  = await database.ViewAllEmployees();
    const managersName = managers.map((manager) => {
        return `${manager.first_name} ${manager.last_name}`;
});
    let rileId;
    let managerId;
    const answers = await inquirer.prompt(
        {
             type: 'input',
            message: "What is the employee's first name?",
             name: 'firstName'
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'lastName'
        },
        {
            type: 'input',
            message: "What is the employee's role?",
            choices: roles.title,
            name: 'role'
        },
        {
            type: 'input',
            message: "What is the employee's manager?",
            choices: managers,
            name: 'manager'
        }
    )};

    for(let i = 0; i < roles.length; i++) {
        if(answers.role === roles[i].title) {
            roleId = roles[i].id;
    }
}

for(let i = 0; i < managers.length; i++) {
    if(answers.manager)



menu();
}