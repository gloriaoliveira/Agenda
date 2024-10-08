const form = document.getElementById('form-contatos');
const nome = document.getElementById('input-nome');
const telefone = document.getElementById('input-telefone');
const valorContato = document.getElementById('valor-contatos');

let totalContatos = 0;

console.log("O script foi carregado corretamente");

form.addEventListener('submit', function (e) {
   e.preventDefault();
   
   adicionaLinha()
})

function adicionaLinha() {
   console.log("Nome input:", nome.value); // Registra o valor do nome
   console.log("Telefone input:", telefone.value); // Registra o valor do tel


   let linhas = '<tr>'
   linhas += '<td>' + nome.value + '</td>';
   linhas += '<td>' + telefone.value + '</td>';
   linhas += '</tr>';

   document.querySelector('tbody').innerHTML += linhas;

   totalContatos++;
   valorContato.textContent = totalContatos;

   inputNomeAtividade.value = '';
   inputNotaAtividade.value= '';
}