// var myfunction = function () {
//   var a = 10;
// };
// var myObject = {
//   b: 10,
// };

// console.log(myfunction.name);

// let myfunction = function () {
//   console.log(`This is my Function`);
// };
// let myfunction2 = function () {
//   console.log(`This is my Function2`);
// };
// let myfunction3 = function () {
//   console.log(`This is my Function3`);
// };
// let myfunction4 = function () {
//   console.log(`This is my Function4`);
// };

// let myArray = [myfunction, myfunction2, myfunction3, myfunction4];
// for (let i = 0; i < myArray.length; i++) {
//   myArray[i]();
// }

// let yourFunction = function (fn) {
//   fn();
//   console.log(`This is your function`);
// };

// let newFun = function () {
//   console.log(`lOl! This this my Function`);
// };

// yourFunction(newFun);

// let limit = 500;

// function changeLimit(limit) {
//   limit = 1000;
// }

// changeLimit(limit);
// console.log(limit);

// function randomSum(max) {
//   const randomNum1 = Math.floor(Math.random() * max);
//   const randomNum2 = Math.floor(Math.random() * max);
//   console.log(randomNum1);
//   console.log(randomNum2);
//   return randomNum1 + randomNum2;
// }

// console.log(randomSum(101));

// function genarateRandomNumber(max) {
//   const randomNum1 = Math.floor(Math.random() * max);
//   const randomNum2 = Math.floor(Math.random() * max);
//   return {
//     randomNum1,
//     randomNum2,
//   };
// }

// function RandomSum() {
//   const { randomNum1, randomNum2 } = genarateRandomNumber(102);
//   return randomNum1 + randomNum2;
// }
// console.log(RandomSum());

// function RandomMul() {
//   const { randomNum1, randomNum2 } = genarateRandomNumber(152);
//   return randomNum1 * randomNum2;
// }
// console.log(RandomSum());

// function RandomDiv() {
//   const { randomNum1, randomNum2 } = genarateRandomNumber(102);
//   return randomNum1 / randomNum2;
// }
// console.log(RandomSum());

// function genarateRandomNumber2(max, fn) {
//   const randomNum1 = Math.floor(Math.random() * max);
//   const randomNum2 = Math.floor(Math.random() * max);
//   const result = fn(randomNum1, randomNum2);
//   console.log(result);
// }

// genarateRandomNumber2(100, (randomNum1, randomNum2) => {
//   return randomNum1 + randomNum2;
// });

var array = [1, 2, 3, 4, 5];

var myMap = function (array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }
  return newArray;
};

console.log(
  myMap(array, function (element) {
    return element * 8;
  })
);
