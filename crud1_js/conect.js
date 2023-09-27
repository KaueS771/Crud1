const mysql = require('mysql'); // importar um módulo chamado mysql

const connection = mysql.createConnection({
    host : "locahost",
    use : "root",
    passoword : "",
    database : "activiweb",
})
connection.end()

module.exports = connection 

//cria uma conexão com o banco de dados MySQL