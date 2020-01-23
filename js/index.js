var nome = document.getElementById('nome');
var idade = document.getElementById('idade');
var bairro = document.getElementById('bairro');
var rua = document.getElementById('rua');
var numero = document.getElementById('numero');
var btnCadastrar = document.getElementById('btn-cadastrar');
var tabela = document.querySelector('#tabela-pessoas tbody');

btnCadastrar.addEventListener('click', function(){

    // Criando o objeto pessoa com os dados da tela.
    var pessoa = {
        nome: nome.value,
        idade: idade.value,
        bairro: bairro.value,
        rua: rua.value,
        numero: numero.value
    };

    if(pessoa.nome == '' || pessoa.idade == ''){
        alert('Favor informar o nome e/ou idade.');
        return;
    }

    var tr = document.createElement('tr');
    var tdNome = document.createElement('td');
    var tdIdade = document.createElement('td');
    var tdBairro = document.createElement('td');
    var tdRua = document.createElement('td');
    var tdNumero = document.createElement('td');

    tdNome.textContent = pessoa.nome;
    tdIdade.textContent = pessoa.idade;
    tdNumero.textContent = pessoa.numero;
    tdBairro.textContent = pessoa.bairro;
    tdRua.textContent = pessoa.rua;

    tr.appendChild(tdNome);
    tr.appendChild(tdIdade);
    tr.appendChild(tdNumero);
    tr.appendChild(tdBairro);
    tr.appendChild(tdRua);
    
    tabela.appendChild(tr);

});



