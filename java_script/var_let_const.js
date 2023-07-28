var a = "adwaith";
console.log(a);// adwaith
{
    var a="you";
    console.log(a);//you
}

console.log(a);//you

// var is a global scope not a block scope

let b = "adwaith";
console.log(b);// adwaith
{
    let b="you";
    console.log(b);//you
}

console.log(b);//adwaith

// let is a global scope not a block scope