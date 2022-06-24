// 정확한 클로저 개념
// 클로저는 자바스크립트 고유의 개념이 아니라 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어
// (Functional Programming language: 얼랭(Erlnag), 스칼라(Scala), 하스켈(Haskell), 리스프(Lisp)…)에서 사용되는 중요한 특성이다.
// 클로저는 동일한 인자 값이 들어오면 한상 결과값은 변하지않는다.

//클로저는 전역변수로 선언하지않아도 함수내에서 최신 상태값을 유지 할  수 있다.
//최신 상태값 유지 예시

//html 이벤트 사용 예시=====================================================
const toggleBtn = document.querySelector('.toggle');
const box = document.querySelector('.box');

function fn() {
  let isShow = false;

  // 클로저 반환
  function boxStyle() {
    box.style.backgroundColor = isShow ? 'black' : 'yellow';
    // 상태 변경
    isShow = !isShow;
    console.log('currSHow', isShow);
  }

  return boxStyle;
}

// 이벤트 프로퍼티에 클로저를 할당
// toggleBtn.onclick = fn();

//html 이벤트 사용 예시=====================================================

//함수 사용예시============================================================
function test() {
  let count = false;

  // 클로저 반환
  function findEvenNum() {
    // 상태 변경
    count = !count;
    console.log(count);
    return count;
  }

  return findEvenNum;
}

let closure = test();

//함수 사용예시============================================================

//클로저 사용하여 무분별한 전역변수 사용 막음 ==============================================

const plus = document.querySelector('#add');
const minus = document.querySelector('#minus');
const displaya = document.querySelector('#currNum');

let changeNum = (function () {
  let currNum = 0;

  return function () {
    console.log(currNum);
    return ++currNum;
  };
})();

function displayAdd() {
  displaya.innerHTML = changeNum();
}

function displayMinus() {
  let closure = changeNum();
  displaya.innerHTML = changeNum('-');
}
console.log('played');

plus.addEventListener('click', function () {
  displayAdd();
});

// plus.addEventListener('click', displayAdd);
minus.addEventListener('click', displayMinus);

//클로저 사용하여 무분별한 전역변수 사용 막음 ==============================================
