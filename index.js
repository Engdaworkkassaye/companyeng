const { prompt } = require('enquirer');
const { viewAllDepartments,  addDepartment,addRole,viewAllRoles,addEmployee,updateEmployeeRole,viewAllEmployees
 } = require('./utils/actions');

async function start() {
  const response = await prompt({
    type: 'select',
    name: 'action',
    message: 'What would you like to do?',
    choices: [

      'Add a department',
      'View all departments',
      'Add a role',
      'View all roles',
      'Add an employee',
      'View all employees',
     
     
      'Update an employee role',
      'Exit'
    ],
  });
  

  switch (response.action) {
    case 'View all departments':
      await viewAllDepartments();
      break;
    
    case 'Add a department':
      await addDepartment();
      break;

      case 'View all roles':
        await viewAllRoles();
        break;

        case 'Add a role':
      await addRole();
      break;

      case 'View all employees':
      await viewAllEmployees();
      break;

      case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;

    case 'Exit':
      console.log('Exiting the application.');
      process.exit();
  }

  
  start();
}


start();
