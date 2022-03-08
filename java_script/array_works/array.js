//Q one by one printing ?

var expenses=[10000,15000,12000,23000,25000,30000]


// for(let amount of expenses){
//     console.log(amount);
// }


//Q total expense ?

// var total=0;
// for(let amount of expenses){
//     total+=amount
// }
// console.log("Total expense = ",total);


//Q max expense ?

// var maxExp=0;
// for(let amount of expenses){
//     if(maxExp<amount){
//         maxExp=amount;
//     }
// }
// console.log(maxExp);


//Q min expense ?

var minExp=expenses[0]
for(let amount of expenses){
    if(amount<minExp){
        minExp=amount
    }
}
console.log(minExp);