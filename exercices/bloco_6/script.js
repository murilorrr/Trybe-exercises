function AdicionaEstados() {
  const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const listaEstado = document.getElementById('Estado')
  for (let i = 0; i < estados.length; i+= 1) {
    let opção = document.createElement('option')
    opção.innerText = estados[i]
    opção.value = estados[i]
    listaEstado.appendChild(opção)
  }
}

AdicionaEstados();

function inserirDataDeHoje() { 
  diaMesAno = new Date();
  var dia = diaMesAno.getDate();
  var mes = (diaMesAno.getMonth() + 1);
  var ano = diaMesAno.getFullYear();
  let inputData = document.querySelector('#data');
  inputData.value = `${ano}-0${mes}-${dia}`;
}

function verificaEmail() {
  email = document.getElementById("email")
  let arrayEmail = email.value.split('@')
  if(arrayEmail >= 2) {
    return true
  } else { 
    preventDefault()
  }
}
 // zezé me ajudou com este codigo (instrutor da trybe)
document.getElementById("myAnchor").addEventListener("click", function CliqueDeBotão(Event) {
  verificaEmail()
});
