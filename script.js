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

const url = `http://viacp.com.br/ws/${cep.value}/json`;
fetch(url)
.then(resposta=>resposta.json())
.then(dados=>alert)

function alertar(event){
    saida.innerText = "Nome:" + nome.value +
            "\n Email: " + email.value+
           "\n Telefone: " + telefone.value+
                        "\n CEP: " + CEP.value+
                    "\n Logradouro: " + logradouro.value+
                          "\n Numero: " + numero.value+
                         "\n Complemento: " + complemento.value+
                           "\n Bairro: " + bairro.value+
                               "\n Cidade: " + cidade.value+
                                 "\n Estado: " + estado.value;
}