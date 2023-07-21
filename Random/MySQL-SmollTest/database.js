const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test",
// });

// connection.connect((err) => {
//     if (err) throw err;
//     console.log("Connection established");
// });

const connectToDatabase = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "test",
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log("Connection established");
    });

    return connection;
};

const sendDataToDatabase = ({ name, age, email }) => {
    const connection = connectToDatabase();

    const query = "INSERT INTO test SET ?";

    connection.query(query, [name, age, email], (err, result) => {
        if (err) throw err;
        console.log("Data sended correctly");
    });

    endConnection(connection);
};

const endConnection = (connection) => {
    connection.end((err) => {
        if (err) throw err;
        console.log("Connection closed");
    });
};

export default sendDataToDatabase;

// * Aqui el mismo modulo se encarga de ordenar e insertar los datos

// ! El '!' funciona como el preparedStatement en Java

// const query = "INSERT INTO test SET ?";

// connection.query(query, newUser, (err, result) => {
//     if (err) throw err;
//     console.log("Usuario insertado correctamente");
// });

// * Tambien puede hacerse de esta manera

// const query = "INSERT INTO test (name, age, email) VALUES (?, ?, ?)";

// let { name, age, email } = newUser;

// connection.query(query, [name, age, email], (err, res) => {
//     if (err) throw err;
//     console.log("Datos insertados correctamente");
// });

// connection.end((err) => {
//     if (err) throw err;
//     console.log("Connection closed");
// });
