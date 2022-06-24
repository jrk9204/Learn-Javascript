let thisData = {
  a: 'hello',
  b: function () {
    console.log(this);
  },
};

// thisData.b();

let test = thisData.b;

console.log('<==========================================>');

// test();

let getbtn = document.querySelector('.test');

let bindEl = test.bind(thisData);

getbtn.addEventListener('click', bindEl);

// getbtn.addEventListener('click', test);
