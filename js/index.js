var nome = document.getElementById('nome');
var idade = document.getElementById('idade');
var bairro = document.getElementById('bairro');
var rua = document.getElementById('rua');
var numero = document.getElementById('numero');
var btnCadastrar = document.getElementById('btn-cadastrar');

var tabela = document.querySelector('#tabela-pessoas tbody');

btnCadastrar.addEventListener('click', function(){

    var pessoa = {
        nome: nome.value,
        idade: idade.value,
        bairro: bairro.value,
        rua: rua.value,
        numero: numero.value
    };
    
    if(!verificarSeAPessoaFoiPreenchida(pessoa)){
        alert('Favor informar o nome e/ou idade.');
        return;
    }

    var tr = criarDinamicamenteATrPreenchida(pessoa);
    adicionarTrNaTabela(tr);
    limparCampos();
    colocarFocusNoCampoNome();
});

function verificarSeAPessoaFoiPreenchida(pessoa){

    if(pessoa.nome == '' || pessoa.idade == ''){
        return false;
    }
    return true;
}

function criarDinamicamenteATrPreenchida(pessoa){

    //Criando as tds e trs  dinamicamente
    var tr = document.createElement('tr');

    var tdNome = document.createElement('td');
    var tdIdade = document.createElement('td');
    var tdBairro = document.createElement('td');
    var tdRua = document.createElement('td');
    var tdNumero = document.createElement('td');

    // Passando os valores para as tds e trs
    tdNome.textContent = pessoa.nome;
    tdIdade.textContent = pessoa.idade;
    tdNumero.textContent = pessoa.numero;
    tdBairro.textContent = pessoa.bairro;
    tdRua.textContent = pessoa.rua;

    /// Adicionando as tds dentro das trs
    tr.appendChild(tdNome);
    tr.appendChild(tdIdade);
    tr.appendChild(tdNumero);
    tr.appendChild(tdBairro);
    tr.appendChild(tdRua);

    return tr;           
}

function adicionarTrNaTabela(tr){
// Adicionando a tr a tabela.
tabela.appendChild(tr);
}

function limparCampos(){
    // limpar campos
    nome.value = '';
    idade.value = '';
    rua.value = '';
    numero.value = '';
    bairro.value = '';
}

function colocarFocusNoCampoNome(){
    // aqui vou me virar para colocar o focus.
}
