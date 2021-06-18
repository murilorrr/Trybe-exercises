const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaNoObjetoChaveEValor = (objeto,chave,valor) => objeto[`${chave}`] = valor;

const listaKeysDoObjeto = (objeto) => Object.keys(objeto);

const tamanhoDoObjeto = (objeto) => Object.keys(objeto).length;

const listaValoresDoObjeto = (objeto) => Object.values(objeto);

const allLessons = {lesson1,lesson2,lesson3};

const getValueByNumber = (lissao, number) => Object.values(allLessons.lissao)


console.log((allLessons.lesson1).indexOf());