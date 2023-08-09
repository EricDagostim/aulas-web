
var total_despesas = 0;
var total_receitas = 0;
var total_saldo = 0;

function add(){
    let conta = document.getElementById("conta").value;
    let tipo = document.getElementById("tipo").value;
    let valor = document.getElementById("valor").value;

    let tr = document.createElement('tr');
    let td_conta = document.createElement('td');
    let td_tipo = document.createElement('td');
    let td_valor = document.createElement('td');

    if(tipo == "D"){

        total_despesas += parseFloat(valor);
        document.getElementById("total_despesas").innerHTML = total_despesas;
        total_saldo -= parseFloat(valor);
        td_tipo.innerHTML = "Despesa";

    }else if(tipo == "R"){

        total_saldo += parseFloat(valor)    ;
        total_receitas += parseFloat(valor);
        document.getElementById("total_receitas").innerHTML = total_receitas;
        td_tipo.innerHTML = "Receita";

    }else{
        alert("Insira um tipo na conta");
    }

    td_conta.innerHTML = conta;
    td_valor.innerHTML = valor;

    if(total_saldo < 0){
        document.getElementById("tr_saldo").classList.add("negative");
        document.getElementById("tr_saldo").classList.remove("positive");
    }else{
        document.getElementById("tr_saldo").classList.add("positive");
        document.getElementById("tr_saldo").classList.remove("negative");
    }

    

    tr.append(td_conta);
    tr.append(td_tipo);
    tr.append(td_valor);

    document.getElementsByTagName('table')[0].append(tr);
    document.getElementById("total_saldo").innerHTML = total_saldo;

    
}