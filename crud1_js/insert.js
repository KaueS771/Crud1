let sql = 'insert into cursos set ?'//Define uma consulta SQL para inserir dados na tabela 'cursos'.
//O SQL utiliza a sintaxe INSERT INTO para adicionar um novo registro à tabela.
//O operador SET é usado para definir os valores dos campos.
//O ? é um espaço reservado para os valores dos campos, que serão passados posteriormente como um objeto.

let dados = {nome:'Infor', tipo: 'exatas'}//Define um objeto chamado 'dados' que contém os valores a serem inseridos na tabela.
//Neste caso, ele define os valores para as colunas 'nome' e 'tipo'.
connection.query(sql,dados, function(errosr,results,fields){//Executa a consulta SQL usando a função query da conexão MySQL.
//Os valores a serem inseridos são fornecidos como um objeto dados. A função de retorno de chamada lida com os resultados da consulta.
    if(error) throw error
    connsole.log("Curso salvo no BD", results.insertID)//Se a inserção for bem-sucedida, exibe uma mensagem no console informando que o curso foi salvo no banco de dados e também exibe o ID do registro inserido.
//O ID é acessado através de results.insertID.
})
connection.end()