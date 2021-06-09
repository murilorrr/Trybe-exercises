function inserirDataDeHoje() { 
  diaMesAno = new Date();
  var dia = diaMesAno.getDate();
  var mes = (diaMesAno.getMonth() + 1);
  var ano = diaMesAno.getFullYear();
  let inputData = document.querySelector('#data');
  inputData.value = `${ano}-0${mes}-0${dia}`;
}
inserirDataDeHoje()

function verificaDataDeHoje() {
  let inputData = document.querySelector('#data').value;
  array = inputData.split('-')
  ano = parseInt(array[0],10)
  mes = parseInt(array[1],10)
  dia = parseInt(array[2],10)
  if (ano < 0) {
    alert(`ano: ${ano} não é possivel`)
  }
  if (mes <= 0 || mes > 12) {
    alert(`mês: ${mes} não é possivel`)
  }
  if (dia <= 0 || dia > 31) {
    alert(`dia: ${dia} não é possivel`)
  }
}
verificaDataDeHoje();

function antesDeSubmeter() {
  preventDefault()
}

document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});