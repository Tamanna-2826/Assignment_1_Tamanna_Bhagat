const mysql = require("mysql2/promise");

async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "MernEmpDb",
  });
  console.log("Connected to the database.");
  return connection;
}

async function insertEmployee(connection, employee) {
  const { name, age, department } = employee;
  const query = "INSERT INTO employee (name, age, department) VALUES (?, ?, ?)";
  await connection.execute(query, [name, age, department]);
  console.log("Record inserted successfully.");
}

async function getEmployees(connection) {
  const [rows] = await connection.execute("SELECT * FROM employee");
  console.log("All employees:", rows);
}

(async function main() {
  try {
    const connection = await connectToDatabase();

    const newEmployee = {
      name: "Mansi",
      age: 25,
      department: "HR",
    };
    await insertEmployee(connection, newEmployee);

    await getEmployees(connection);

    await connection.end();
  } catch (error) {
    console.error("Error:", error);
  }
})();
