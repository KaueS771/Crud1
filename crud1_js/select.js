const connection = require('./conect'); // importa um módulo chamado connection de um arquivo chamado: conect

let sql = "SELECT * FROM cursos WHERE id = ?"; //define uma consulta SQL que busca informações de um curso com um Id especifico,
//A consulta utiliza um espaço reservado(?) para o valor do ID, que é definido como '3'.
let id = 3;

connection.query(sql, id, function(error, results, fields) {//Executa a consulta no banco de dados usando a função query da conexão MySQL.
//A função recebe a consulta SQL, o valor do ID e uma função de retorno de chamada que lida com os resultados da consulta.
    if (error) throw error; 
    if (results.length === 0) {//Verifica se a consulta retornou algum resultado (linhas). Se não houver resultados,
// exibe uma mensagem indicando que nenhum curso foi encontrado e sai da função usando return.
        console.log("Nenhum curso encontrado");
        return;
    }
    let curso = results[0];//Se houver resultados, obtém o primeiro resultado da matriz de resultados (results)
//e armazena-o na variável curso.
    console.log("ID: " + curso.id + ", Nome: " + curso.nome + ", Tipo: " + curso.tipo); //Finalmente, exibe as informações do curso (ID, nome e tipo) no console 
});

connection.end();//encerra a conexão com o banco de dados usando connection.end()

