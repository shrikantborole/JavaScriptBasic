// JavaScript source code

//Global Scope

var a; //Undefined
console.log(a);
a = 10; 
console.log(a); //10
{
    var a = 100;
    console.log(a); //100
}
console.log(a); //100 (Reasone - Created in Global Space)


console.log(Test); // This will print the function, as before code execution the MEMORY IS ALLOCATE TO FUNCTION AND VARIBLE. The default value for variable is UNDEFINED.
function Test() {
    return 100;
}
console.log(Test); // This will return a function
console.log(Test()); // This will execute the function