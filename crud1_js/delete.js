let sql = 'delete from cursos where id = ?'//define uma consulta em SQL para incluir um registro da tabela 'cursos' com base no valor do campo 'id' - ?
let id = 2 
connection.query(sql, id, function(erro,results,fiels){//executa a consulta SQL de exclusão usando a função 'query' da conexão MySQL
//o valor do campo 'id' é fornecido como o ssegundo argumento na função 'query'
    if(error) throw error
    console.log("Apagado com sucesso!")
})
connection.end()