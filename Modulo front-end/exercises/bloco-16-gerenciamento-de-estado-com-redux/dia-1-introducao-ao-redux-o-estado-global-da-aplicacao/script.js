const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = 'NEXT_COLOR';

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const nextColor = () => {
  return { type: NEXT_COLOR }
}

const previusColor = () => {
  return { type: PREVIOUS_COLOR }
}

function reducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case NEXT_COLOR:
      return ({colors: state.colors,index: state.index === state.colors.length -1 ? state.index = 0 : state.index += 1});
    case PREVIOUS_COLOR:
      return ({colors: state.colors,index:state.index === 0 ? state.index = state.colors.length -1 : state.index -= 1});
    default:
      return state;
  }
}


document.getElementById('previous').addEventListener('click', () => {
  store.dispatch(previusColor())
});

document.getElementById('next').addEventListener('click', () => {
  store.dispatch(nextColor())
})

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { index, colors } = store.getState()
  document.getElementById('value').innerHTML = colors[index];
});



