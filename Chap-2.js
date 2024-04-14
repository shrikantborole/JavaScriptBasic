// JavaScript source code

//Hoisting - The ability to use the varible before declaring it in the code.

console.log(a); //Undefined
var a;

console.log(Test);  //function defination
console.log(Test()); //100

function Test() {
    return 100;
}

console.log(bar()); // TypeError: bar is not a function
var bar = function () {
    console.log("Test");
}

