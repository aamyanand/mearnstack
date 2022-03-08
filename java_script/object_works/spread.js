function add(num1,num2){
    return num1+num2
}

function add(num1,num2,num3){
    return num1+num2+num3
}



//function overloading
//same function name diff no of parameters[x]


//spread operator   ---   to overcome function overloading

// function add(...args){
//     console.log("arg method");
//     console.log(args);
// }

// add(10)
// add(10,20)
// add(10,20,30)



function add(...args){
    return args.reduce(n1,n2=>n1+n2)
}

console.log(add(10,20,30,40));