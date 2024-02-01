const connection = require('../db/connection');

class Role {
  static async getAllRoles() {
    const query = 'SELECT * FROM roles';
    const [roles] = await connection.query(query);
    return roles;
  }

  static async addRole(title, salary, departmentId) {
    const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
    await connection.query(query, [title, salary, departmentId]);
  }
}

module.exports = Role;
