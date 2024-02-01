const inquirer = require('inquirer');
const Department = require('../models/department');
const Role = require('../models/role');
const Employee = require('../models/employee');


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
  async function addEmployee() {
    const employeeData = await inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the new employee:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the new employee:',
      },
      {
        type: 'number',
        name: 'roleId',
        message: 'Enter the role ID for the new employee:',
      },
      {
        type: 'number',
        name: 'managerId',
        message: 'Enter the manager ID for the new employee (or leave blank for none):',
      },
    ]);
  
    await Employee.addEmployee(employeeData.firstName, employeeData.lastName, employeeData.roleId, employeeData.managerId);
    console.log('Employee added successfully!');
  }
  
  async function updateEmployeeRole() {
    try {
      let employees = await Employee.getAllEmployees();
      console.log(employees);
  
      employees = Array.isArray(employees) ? employees : [employees];
  
      const employeeChoices = employees.map((employee) => ({
        value: employee.id,
        name: `${employee.first_name} ${employee.last_name}`,
      }));
  
      const updateData = await inquirer.prompt([
        {
          type: 'list',
          name: 'employeeId',
          message: 'Select the employee to update:',
          choices: employeeChoices,
        },
        {
          type: 'number',
          name: 'newRoleId',
          message: 'Enter the new role ID for the employee:',
        },
      ]);
  
      await Employee.updateEmployeeRole(updateData.employeeId, updateData.newRoleId);
      console.log('Employee role updated successfully!');
    } catch (error) {
      console.error('Error updating employee role:', error.message);
    }
  }
  async function viewAllEmployees() {
    const employees = await Employee.getAllEmployees();
    console.table(employees);
  }

module.exports = {
  viewAllDepartments,
  addDepartment,
  addRole,
 viewAllRoles,
 addEmployee,
 updateEmployeeRole,
 viewAllEmployees
 
  
};

