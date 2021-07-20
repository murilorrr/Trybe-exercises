let pizza = {
    sabor: "catupiry",
    preco: 39.90,
    borda: true
}



let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
for (let key in car){
  console.log(key, car[key])
}
console.table(car)