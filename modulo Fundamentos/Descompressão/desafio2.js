"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"

function optionsMenu(number){
  const obj = {
    1: 'Trybe Lanche Feliz',
    2: 'McTrybe',
    3: 'TrybeWooper',
    4: 'X-Trybe',
    5: 'Triplo Trybe com JS',
  }
  if(obj[number] === undefined) return "Não temos esta opção ainda :(";
  return obj[number];
}

console.log(optionsMenu(6));