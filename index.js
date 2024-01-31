const { prompt } = require('enquirer');


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
  

  
  start();
}

start();
