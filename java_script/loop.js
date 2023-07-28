let marks ={
    adwaith:99,
    arjun:50,
    akash:40,
    vipin:70,

}

console.log(Object.keys(marks));
console.log(marks[Object.keys(marks)[2]]);

// for (let i=0 ;i<Object.keys(marks).length;i++)
// {
//    console.log ("The marks of " + Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]]);
// }

for (let key in marks)
{
    console.log ("The marks of " + key+" is "+marks[key]);
}
