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

function verificaDataDeHoje() {
  let inputData = document.querySelector('#data').value;
  if (inputData.value == '') {
    alert(`Data inválida`);
    preventDefault();
  }
  array = inputData.split('-')
  ano = parseInt(array[0],10)
  mes = parseInt(array[1],10)
  dia = parseInt(array[2],10)
  if (ano < 0) {
    alert(`ano: ${ano} não é possivel`)
    preventDefault();
  }
  if (mes <= 0 || mes > 12) {
    alert(`mês: ${mes} não é possivel`)
    preventDefault();
  }
  if (dia <= 0 || dia > 31) {
    alert(`dia: ${dia} não é possivel`)
    preventDefault();
  }
}

AdicionaEstados();
inserirDataDeHoje();

document.getElementById("myAnchor").addEventListener("click", function CliqueDeBotão(Event) {
  verificaDataDeHoje();
  verificaEmail()
});
