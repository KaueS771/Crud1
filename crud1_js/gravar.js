const con = require('./select')

function gravar(){
    let n = document.getElementById("nome").value;
    let c = document.getElementById("curso").value;

    con.inserir(n,c)
}