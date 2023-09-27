let sql = 'update curso set ? where id = ?'
let dados = {id:2, nome:"bio", tipo: "humanas"}//Define um objeto chamado 'dados' que contém os valores a serem atualizados.
//O valor do campo 'id' é definido como 2, o valor do campo 'nome' é definido como "bio" e o valor do campo 'tipo' é definido como "humanas".
let id = dados.id//: Obtém o valor do campo 'id' do objeto 'dados' e o armazena na variável 'id'
connection.query(sql,[dados,id], function(error,results,fields){// Executa a consulta SQL de atualização usando a função query da conexão MySQL.
//Os valores a serem atualizados e o valor do campo 'id' são fornecidos como um array [dados, id].
//A função de retorno de chamada lida com os resultados da consulta.
    if(error) throw error
    connsole.log("Dados atualizados com sucesso!")
})
connection.end()