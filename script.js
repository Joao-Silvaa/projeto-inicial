var botao = document.getElementById("botao");
botao.addEventListener("click",alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemnto = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");


function alertar(event){
  alert("Você clicou")

const url = `http://viacep.com.br/ws/${CEP.value}/json`;
fetch(url)
    .then(function (respostas){
        return respostas.json()  
      })
      .then(function(dados){
        logradouro.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.localidade;
        estado.value = dados.uf;
      })
           
}

function saidaDeDados(){
  saida.innerText = "Nome:" + nome.value +
  "\n Email: " + email.value+
  "\n Telefone: " + telefone.value+
  "\n CEP: " + CEP.value+
  "\n Logradouro: " + logradouro.value+
  "\n Numero: " + numero.value+
  "\n Complemento: " + complemnto.value+
  "\n Bairro: " + bairro.value+
  "\n Cidade: " + cidade.value+
  "\n Estado: " + estado.value;
}