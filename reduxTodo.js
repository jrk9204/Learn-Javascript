const list = document.querySelector('#list');
const inputVal = document.querySelector('#contentVal');
const submitBtn = document.querySelector('#submit');

const submitLi = 'SUBMIT';
const deleteLi = 'DELETE';

const reducer = (listArr = [], action) => {
  switch (action.type) {
    case submitLi:
      return [
        ...listArr,
        { text: action.payload, id: action.id },
      ];

    case deleteLi:
      return listArr.filter((el) => el.id !== action.id);

    default:
      return listArr;
  }
};

const store = Redux.createStore(reducer);
const handleSubmit = (e) => {
  e.preventDefault();
  store.dispatch({
    type: submitLi,
    payload: inputVal.value,
    id: Date.now(),
  });
};

const handleDel = (currEl) => {
  store.dispatch({
    type: deleteLi,
    id: currEl.id,
  });
};

const detectList = () => {
  console.log(store.getState());

  list.innerHTML = '';
  store.getState().forEach((el) => {
    const newLi = document.createElement('li');

    const delbtn = document.createElement('button');

    newLi.innerHTML = el.text;

    delbtn.innerHTML = 'delete';

    delbtn.addEventListener('click', () => handleDel(el));

    newLi.appendChild(delbtn);

    list.appendChild(newLi);
  });
};

store.subscribe(detectList);

submitBtn.addEventListener('click', handleSubmit);
