/** @format */

var userObj = {
  firstName: 'Bob',
  lastName: 'Marley',
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function defUpperStr(str) {
  return (str || 'default text').toUpperCase();
}
console.log(defUpperStr('my text'));
console.log(defUpperStr());

function evenFn(n) {
  var arr = [];

  for (var i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  return arr;
}
console.log(evenFn(10));

function weekFn(n) {
  var str = '';

  switch (n) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье';
      break;
    default:
      str = null;
  }
  return str;
}
console.log(weekFn(1));
console.log(weekFn());

function ageClassification(n) {
  var str = '';

  str =
    n < 0
      ? null
      : n <= 24
      ? 'детский возраст'
      : n <= 44
      ? 'молодой возраст'
      : n <= 65
      ? 'средний возраст'
      : n <= 75
      ? 'пожилой возраст'
      : n <= 90
      ? 'старческий возраст'
      : n <= 122
      ? 'долгожители'
      : null;
  return str;
}
console.log(ageClassification(24));
console.log(ageClassification(-1));
console.log(ageClassification(123));
console.log(ageClassification());

function oddFn(n) {
  var arr = [];
  var i = 0;

  while (i++ < n) if (i % 2 !== 0) arr.push(i);

  return arr;
}
console.log(oddFn(21));

function mainFunc(a, b, cb) {
  if (cb && typeof cb === 'function') return cb(a, b);
  else return false;
}

function cbRandom(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function cbPow(a, b) {
  return Math.pow(a, b);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(1, 10, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
