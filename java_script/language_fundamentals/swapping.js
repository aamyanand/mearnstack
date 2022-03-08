
//using temp(extra memory)

var num1=10,num2=20;
console.log(`value before swapping num1=${num1},num2=${num2}`);
var temp=num1;
num1=num2;
num2=temp;
console.log(`value after swapping num1=${num1},num2=${num2}`);

//another logic(without extra memory)

// num1=num1+num2;
// num2=num1-num2;
// num1=num1=num2;
//console.log(`value after swapping num1=${num1},num2=${num2}`);
