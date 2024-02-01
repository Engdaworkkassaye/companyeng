const inquirer = require('inquirer');
const Department = require('../models/department');
const Role = require('../models/role');


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
  async function viewAllRoles() {
    const roles = await Role.getAllRoles();
    console.table(roles);
  }
  async function addRole() {
    const roleData = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title for the new role:',
      },
      {
        type: 'number',
        name: 'salary',
        message: 'Enter the salary for the new role:',
      },
      {
        type: 'number',
        name: 'departmentId',
        message: 'Enter the department ID for the new role:',
      },
    ]);
  
    await Role.addRole(roleData.title, roleData.salary, roleData.departmentId);
    console.log('Role added successfully!');
  }



  
module.exports = {
  viewAllDepartments,
  addDepartment,
  addRole,
 viewAllRoles
  
};

