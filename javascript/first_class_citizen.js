// 일급 객체는 변수에 함수를 담을 수 있고. 함수의 인자에 도 함수를 담을 수 있다.
// 또한 함수의 리턴값으로 함수를 사용 할 수 있다.
// 함수도 결국 객체이고 일급 객체이다.
// 일급 함수는 함수는 아무때나 선언 가능하고 함수는 익명으로 선언할 수 있고 인자로도 사용될 수 있다.
// 즉 함수를 변수값처럼 똑같이 사용가능하다.

// 함수형 프로그래밍에서는 항상 동일하게 동작하는 함수 에서 보조 함수를 조합하는 방식으로 로직 완성한다 그 이유는 모듈화와 사이드 이팩트를 최대한 줄이고 독립적인 함수로 재사용 하기위해.
// 최대한 함수 쪼개서 작성하면 조합방식으로 작성 가능하다.

// 효율적인 작성법.

// 사용자의 나이가 30미만인 총 인원수를 구하고
// 30미만인 인원수에서 또 나이가 30이상인 인원수를 구한다.
// 최종 인원수에서 사용자의 이름 띄우기.

let users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

let temp_user = [];

for (let i = 0, len = users.length; i < len; i++) {
  if (users[i].age < 30) temp_user.push(users[i]);
}

console.log(temp_user.length);

let ages = [];

for (let i = 0, len = temp_user.length; i < len; i++) {
  ages.push(temp_user[i].age);
}

console.log(ages);

let overThirty = [];

for (let i = 0, len = users.length; i < len; i++) {
  if (users[i].age >= 30) overThirty.push(users[i]);
}

console.log(overThirty.length);

let username = [];

for (let i = 0, len = overThirty.length; i < len; i++) {
  username.push(overThirty[i].name);
}

console.log(username);

// filter 와 map 을 사용해서 클로저 함수로 리팩토링하기.

function filter(list, predict) {
  let new_list = [];

  for (let i = 0; i < list.length; i++) {
    if (predict(list[i])) new_list.push(list[i]);
  }

  return new_list;
}

function map(list, iteratee) {
  let new_list = [];

  for (let i = 0; i < list.length; i++) {
    new_list.push(iteratee(list[i]));
  }

  return new_list;
}

let new_under_temp_user = filter(
  users,
  function (curr_age) {
    return curr_age.age < 30;
  }
);
console.log(new_under_temp_user);

let use_map_age = map(
  new_under_temp_user,
  function (needs) {
    return needs.age;
  }
);

let new_over_temp_user = filter(users, function (curr_age) {
  return curr_age.age >= 30;
});
console.log(new_over_temp_user);

let over_thirty_name = map(
  new_over_temp_user,
  function (userName) {
    return userName.name;
  }
);

console.log(over_thirty_name);
