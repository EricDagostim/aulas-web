

function add(){
    //  Valores

    var game = document.getElementById("game").value;
    var estoqueOriginal = document.getElementById("estoqueOriginal").value;
    var valorGame = document.getElementById("valorGame").value;
    var quantidadeAlugar = document.getElementById("quantidadeAlugar").value;

    
    var tr = document.createElement('tr');
    
    let td_game = document.createElement('td');
    let td_estoqueOriginal = document.createElement('td');
    let td_valorGame = document.createElement('td');
    let td_valorAluguel = document.createElement('td');
    let td_quantidadeAlugar = document.createElement('td');
    let td_saldoEstoque = document.createElement('td');
    
    
    td_game.innerHTML = game;
    td_estoqueOriginal.innerHTML = estoqueOriginal;
    td_valorGame.innerHTML = "R$ " + valorGame;
    td_quantidadeAlugar.innerHTML = quantidadeAlugar;
    let valorAluguel = parseInt(quantidadeAlugar) * parseFloat(valorGame);
    let saldoEstoque = parseInt(estoqueOriginal) - parseInt(quantidadeAlugar);
    
    td_valorAluguel.innerHTML = "R$ " + valorAluguel;

    if(saldoEstoque > 5 && saldoEstoque <= 10){     
        tr.classList.add("warning");
    }else if (saldoEstoque < 5){
        tr.classList.add("danger");
    }
    td_saldoEstoque.innerHTML = saldoEstoque;


    tr.append(td_game);
    tr.append(td_estoqueOriginal);
    tr.append(td_valorGame);
    tr.append(td_quantidadeAlugar);
    tr.append(td_valorAluguel);
    tr.append(td_saldoEstoque);
    
    


    
    
    var tbody = document.querySelector("#table tbody");
    tbody.append(tr);
    
}