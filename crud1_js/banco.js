const mysql = require(mysql);

const connection = mysql.createConnection({
    host : "locahost",
    use : "root",
    passoword : "",
    database : "activiweb",
})
connection.connect()

//SELEC 

let sql = "select * from cursos"

connection.query(sql,id, function(error,results,fields){
    if(erro) throw error
    if(results == 0){
        console.log("Nenhum curso encontrado")
        return
    }
    let curso = results[0]
    console.log(curso.id = ":" + curso.nome + ":" + cursot.tipo)
})


//insert
let sql = 'insert into cursos set ?'
let dados = {nome:'Infor', tipo: 'exatas'}
connection.query(sql,dados, function(errosr,results,fields){
    if(error) throw error
    connsole.log("Curso salvo no BD", results.insertID)
})

//Update
let sql = 'update curso set ? wehere id = ?'
let dados = {id:2, nome:"bio", tipo: "humanas"}
let id = dados.id
connection.query(sql,[dados,id], function(errosr,results,fields){
    if(error) throw error
    connsole.log("Dados atualizados com sucesso!")
})
let sql = 'delete from cursos where id = ?'
let id = 2 
connection.query(sql, id, function(erro,results,fiels){
    if(error) throw error
    console.log("Apagado com sucesso!")
})

//fecha a conexão
connection.end()
