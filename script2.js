
// ******************************************************************************************



// function abcd(){
//     const arr = [12,34,5,6,76,78,60,21];
//     arr.unshift(10);
//     console.log(arr);
// }
// abcd();

// // loops

// for (var i = 0; i<7; i++){
//   console.log(i);
// }

// for (let i = 0; i<10; i++){
//   console.log(i);
//}

// for (var i = 0; i < 4; i++) {
//   console.log(i);
// }

// function abcd() {
//   for (var i = 0; i < 23; i++) {
//     console.log(i);
//   }
// }
// abcd();

// var a = 12;

// while (a < 20) {
//   a++;
//   console.log(a);
// }

// let a = 1;
// while (a<23){
//     a++
//     console.log(a);
// }

// function abcd() {
//   let a = 1;
//   while (a < 3) {
//     a++;
//     console.log(a);
//   }
// }
// abcd();

// let kunal = 99;

// while (kunal < 999){
//   kunal++;
//   console.log(kunal);
// }

// // object

// (1) blank object
// var a = {}

// // (2) object

// var ghadi = {
//   brand: "titan",
//   price: "12k",
//   colur: "black",
//   type: "automatic",
// };

// ghadi.colur;

// console.log(ghadi.colur);

// // updating object props

// var ghadi = {
//     brand: "titan",
//     color: "red",
//     kuchhbolo : function () {} // methad
// }
// ghadi.color = "black" // chenge value
// console.log(ghadi.color);

// **********************************************

// (1)function scoped

// function abcd() {
//   for (var i = 1; i < 12; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// abcd();

// (2) braces socped

// function a (){
//   for (let i = 2; i<21; i++){
//     console.log(i);
//   }
// //   console.log(i); // not allow
// }

// a();

// // execution context

// function abcd(){
//     var a = 12;
//     console.log(a);
//     function def(){
//         var b = 21;
//         console.log(b);
//     }

// }
// abcd();

// //Reference value

// var a = [1, 2, 3, 4, 5];
// var b = [...a];
// b.pop();

// callback function

// setTimeout (function (){
//     console.log("2 second baad chalna");
// }, 2000);

// // forEach

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(function (val) {
//   console.log(val + 2);
// });

// // for in

// var obj = {
//   name: "kunal",
//   age: 23,
//   city: "ellora",
// }
// for (var key in obj) {
//     console.log(key, obj[key]);
// };

// first class function

// function abcd(a){
//     a();
// }
// abcd(function(){console.log('hello');})

// // how to delete object prop

// var a = {
//     name: "kunal",
//     age: 21
// }
// delete a.age
// console.log(a);
