const addEl = document.querySelector('#add');
const minusEl = document.querySelector('#minus');
const currNum = document.querySelector('#currNum');
const historyList = document.querySelector('#history');

//리듀서 state 계산후 store 로 보내주는역할

//state value is a initial state
let reducer = (
  countState = Number(currNum.textContent),
  action
) => {
  console.log('reducer', countState, action);

  if (action.type === 'ADD_Num') {
    return (countState += 1);
  } else if (action.type === 'DELETE_Num') {
    return (countState -= 1);
  }

  return countState;
};

let store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log('module 1 subscribe', store.getState());

  const addHistory = document.createElement('li');

  addHistory.innerHTML = store.getState();

  historyList.appendChild(addHistory);
});

let addAction = {
  type: 'ADD_Num',
  payload: '',
};

let deleteAction = {
  type: 'DELETE_Num',
  payload: 'change dispatch',
};

function updateNum() {
  currNum.innerHTML = store.getState();
}

function increase() {
  store.dispatch(addAction);

  updateNum();
}

function decrease() {
  store.dispatch(deleteAction);
  updateNum();
}

function init() {
  addEl.addEventListener('click', increase);

  minusEl.addEventListener('click', decrease);
}

init();
