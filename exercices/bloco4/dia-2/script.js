function Serviços(){
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços') ;
console.log(menu[menuServices]);
}
// 
function Portfólio(){
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);
}
// 
function EmpurreParaOMenu(palavra){
    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    menu.push(palavra)
    console.log(menu);
}
//
// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
function imprimeArrayDefinido(){
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (index = 0; index<groceryList.length; index += 1){
    console.log(groceryList[index])
}
}
