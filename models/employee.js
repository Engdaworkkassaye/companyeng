const connection = require('../db/connection');

class Employee {
  static async getAllEmployees() {
    try {
      const query = `
      SELECT 
        employees.*,
        roles.title AS role_title,
        roles.salary AS role_salary,
        departments.name AS department_name
      FROM employees
      INNER JOIN roles ON employees.role_id = roles.id
      INNER JOIN departments ON roles.department_id = departments.id
    `;

      const [employees] = await connection.pool.query(query);
      return employees;
    } catch (error) {
      console.error('Error fetching employees:', error.message);
      throw error;
    }
  }
  static async addEmployee(firstName, lastName, roleId, managerId) {
    try {
      const query = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      await connection.pool.query(query, [firstName, lastName, roleId, managerId]);
      console.log('Employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error.message);
      throw error;
    }
  }

  static async updateEmployeeRole(employeeId, roleId) {
    try {
      const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
      await connection.pool.query(query, [roleId, employeeId]);
      console.log('Employee role updated successfully!');
    } catch (error) {
      console.error('Error updating employee role:', error.message);
      throw error;
    }
  }
}

module.exports = Employee;
