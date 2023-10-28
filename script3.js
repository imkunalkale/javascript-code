
// // higher order function

// ex 1

// function abcd(val){

// }
// abcd(function(){}) // call function

// // ex 2

// ex 2 forEach

// var arr = [1,2,3,4,5];
// arr.forEach(function(){})

// // constrctor function

// ex1

// function biscuit(){
//     this.width = 12;
//     this.height =22;
//     this.color= "brow";
//     this.teste = "sugare";
// }
// var bis = new biscuit();

// ex2

// function biscuit(color) {
//   this.width = 12;
//   this.height = 22;
//   this.color = "brow";
//   this.teste = "sugare";
// }
// var red = new biscuit("red");

// // first class func

// setTimeout(function(){
//     console.log("hello");
// }, 2000);


// // prototypal inheritance



// var human = {
//     canFly: false,
//     canTalk: false,
//     willDte: true
// }

// var sheryianStudent = {
//     solveJsQuetions: true,
//     createModernWebsite: true
// }

// sheryianStudent.__proto__= human;
// console.log();












// event listeners



var button = document.querySelector("button");
button.addEventListener("click",function(){
    this.style.color= "red";
});

button();

// call apply bind  

// function abcd(){
//     console.log(this);
// }

// var obj ={age:21};

// abcd.call(obj);