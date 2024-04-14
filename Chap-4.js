// JavaScript source code
//Lexical Env => Local Memory and refrence to Lexical Env of the parent

function outer() {
    var test = 100;
    function Inner() {
        console.log(test);
    }
    Inner();
}

outer(); //100

//Inner() has access to Local Memory as well as refrence to Lexicam Env of parent