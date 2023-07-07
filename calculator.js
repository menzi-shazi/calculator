let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");

let addition = document.querySelector(".addition");
let subtraction = document.querySelector(".subtraction");


let output2 = document.querySelector(".output2");
let output1 = document.querySelector(".output1");

let var1 = "";
let var2 = 0;
let operation;

one.onclick = function () {
    var1 += "1";
    output2.innerText = var1;
}

addition.onclick = function () {
    var2 += Number(var1);
    output1.innerText = String(var2);
}