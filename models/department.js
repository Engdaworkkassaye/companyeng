const connection = require('../db/connection');

class Department {
  static async getAllDepartments() {
    try {
      const query = 'SELECT * FROM departments';
      // const [departments] = await connection.query(query);
      // return departments;
      const [rows] = await connection.pool.query(query);
      return rows;
      
    } catch (error) {
      console.error('Error fetching departments:', error.message);
      throw error;
    }
  }
  static async addDepartment(name) {
    try {
      const query = 'INSERT INTO departments (name) VALUES (?)';
      await connection.pool.query(query, [name]);
      console.log('Department added successfully!');
    } catch (error) {
      console.error('Error adding department:', error.message);
    }
  }

}

module.exports = Department;
