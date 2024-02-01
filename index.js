const { prompt } = require('enquirer');
const { viewAllDepartments,  addDepartment } = require('./utils/actions');

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
    
    case 'Exit':
      console.log('Exiting the application.');
      process.exit();
  }

  
  start();
}


start();
