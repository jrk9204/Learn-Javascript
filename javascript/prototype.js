//자동차 브랜드 들은 자동차 공장을 갖고있고 자동차 공장은 공통적으로 바퀴, 바디, 창문을 생성한다.
//자동차 공장 클래스는 몇개의 휠, 바디, 창문을 생성하는지 알수 있다.
function carFactorying(BrandName, wheel, carBody, window) {
  this.BrandName = BrandName;
  this.wheel = wheel;
  this.carBody = carBody;
  this.window = window;
}
const BMW = new carFactorying('BMW', 4, 4, 8);

carFactorying.prototype.getResult = function () {
  return (
    this.BrandName +
    ' makes' +
    this.wheel +
    'wheels and' +
    this.carBody +
    'bodys and' +
    this.window
  );
};

//생성자함수 만들기 , 최상위 함수

function Person(name) {
  let name = '';
  //constructor
  function printName(name) {
    this._name = name;
  }
}

Person.prototype.sayhi = function () {
  console.log(
    this._name + 'get name hello nice to meet you'
  );
};
