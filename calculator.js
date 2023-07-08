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
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");

let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");

let output2 = document.querySelector(".output2");
let output1 = document.querySelector(".output1");

let var1 = "";
let var2 = 0;
let first_time = true;
let change = false;
let operation;

del.onclick = function () {
    var1 = var1.substring(0,var1.length-1);
    output2.innerText = var1;
    change = true;
}

clear.onclick = function () {
    var1 = "";
    var2 = 0;
    output2.innerText = "";
    output1.innerText = "";
    change = true;
}

one.onclick = function () {
    var1 += "1";
    output2.innerText = var1;
    change = true;
}

two.onclick = function () {
    var1 += "2";
    output2.innerText = var1;
    change = true;
}

three.onclick = function () {
    var1 += "3";
    output2.innerText = var1;
    change = true;
}

four.onclick = function () {
    var1 += "4";
    output2.innerText = var1;
    change = true;
}

five.onclick = function () {
    var1 += "5";
    output2.innerText = var1;
    change = true;
}

six.onclick = function () {
    var1 += "6";
    output2.innerText = var1;
    change = true;
}

seven.onclick = function () {
    var1 += "7";
    output2.innerText = var1;
    change = true;
}

eight.onclick = function () {
    var1 += "8";
    output2.innerText = var1;
    change = true;
}

nine.onclick = function () {
    var1 += "9";
    output2.innerText = var1;
    change = true;
}

zero.onclick = function () {
    var1 += "0";
    output2.innerText = var1;
    change = true;
}

addition.onclick = function () {
    if (first_time) {
        var2 = Number(var1);
        output1.innerText = String(var2) + "+";
        first_time = false;
        operation = "+";
    }else if(change) {
        if (operation === "+") {
            var2 += Number(var1);
            output1.innerText = String(var2) + "+";
            operation = "+";
        } else if (operation === "-") {
            var2 -= Number(var1);
            output1.innerText = String(var2) + "+";
            operation = "+";
        } else if (operation === "*") {
            var2 *= Number(var1);
            output1.innerText = String(var2) + "+";
            operation = "+";
        } else if (operation === "/") {
            var2 /= Number(var1);
            output1.innerText = String(var2) + "+";
            operation = "+";
        }
        //console.log(operation);
    }
    change = false;
}

subtraction.onclick = function () {
    if (first_time) {
        var2 = Number(var1);
        output1.innerText = String(var2) + "-";
        first_time = false;
        operation = "-";
    }else if(change) {
        if (operation === "+") {
            var2 += Number(var1);
            output1.innerText = String(var2) + "-";
            operation = "-";
        } else if (operation === "-") {
            var2 -= Number(var1);
            output1.innerText = String(var2) + "-";
            operation = "-";
        } else if (operation === "*") {
            var2 *= Number(var1);
            output1.innerText = String(var2) + "-";
            operation = "-";
        } else if (operation === "/") {
            var2 /= Number(var1);
            output1.innerText = String(var2) + "-";
            operation = "-";
        }
    }
    change = false;
}

multiplication.onclick = function () {
    if (first_time) {
        var2 = Number(var1);
        output1.innerText = String(var2) + "×";
        first_time = false;
        operation = "*";
    }else if(change) {
        if (operation === "+") {
            var2 += Number(var1);
            output1.innerText = String(var2) + "×";
            operation = "*";
        } else if (operation === "-") {
            var2 -= Number(var1);
            output1.innerText = String(var2) + "×";
            operation = "*";
        } else if (operation === "*") {
            var2 *= Number(var1);
            output1.innerText = String(var2) + "×";
            operation = "*";
        } else if (operation === "/") {
            var2 /= Number(var1);
            output1.innerText = String(var2) + "×";
            operation = "*";
        }
    }
    change = false;
}

division.onclick = function () {
    console.log(operation);
    if (first_time) {
        var2 = Number(var1);
        output1.innerText = String(var2) + "÷";
        first_time = false;
        operation = "/";
    }else if(change) {
        if (operation === "+") {
            var2 += Number(var1);
            output1.innerText = String(var2) + "÷";
            operation = "/";
        } else if (operation === "-") {
            var2 -= Number(var1);
            output1.innerText = String(var2) + "÷";
            operation = "/";
        } else if (operation === "*") {
            var2 *= Number(var1);
            output1.innerText = String(var2) + "÷";
            operation = "/";
        } else if (operation === "/") {
            var2 /= Number(var1);
            output1.innerText = String(var2) + "÷";
            operation = "/";
        }
    }
    change = false;
}
