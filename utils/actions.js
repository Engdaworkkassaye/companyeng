const inquirer = require('inquirer');
const Department = require('../models/department');


async function viewAllDepartments() {
  const departments = await Department.getAllDepartments();
  console.table(departments);
}

async function addDepartment() {
    const department = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      },
    ]);
  
    await Department.addDepartment(department.name);
    console.log('Department added successfully!');
  }
module.exports = {
  viewAllDepartments,
  addDepartment
  
};
