const addEl = document.querySelector('#add');
const minusEl = document.querySelector('#minus');
const currNum = document.querySelector('#currNum');
const historyList = document.querySelector('#history');

//리듀서 state 계산후 store 로 보내주는역할

//state value is a initial state
// reducer can modifyed your data
// store is the place that put states.

let reducer = (countState = 0, action) => {
  if (action.type === 'ADD_Num') {
    return (countState += 1);
  } else if (action.type === 'DELETE_Num') {
    return (countState -= 1);
  }

  return countState;
};

let store = Redux.createStore(reducer);

let addAction = {
  type: 'ADD_Num',
  payload: '',
};

let deleteAction = {
  type: 'DELETE_Num',
  payload: 'change dispatch',
};

function addEvent() {
  store.dispatch(addAction);
}

function minusEvent() {
  store.dispatch(deleteAction);
}

addEl.addEventListener('click', addEvent);

minusEl.addEventListener('click', minusEvent);

console.log(store.getState());

store.subscribe(() => {
  // console.log('module 1 subscribe', store.getState());

  // const addHistory = document.createElement('li');

  // addHistory.innerHTML = store.getState();

  // historyList.appendChild(addHistory);

  currNum.innerHTML = store.getState();
});

console.log(store.getState());
