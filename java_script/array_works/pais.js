var arr=[2,3,4,5]
// var sum=9;
// count=1;
// for(let i of arr){
//     for(let j of arr){
//         count++;
//         if((i+j)==sum){
//             console.log(`${i},${j}`);
//             break
//         }
//     }
// }
// console.log("iteration",count);


arr.sort((n1,n2)=>n1-n2)

var pairNum=1
var low=0, upp=arr.length-1;
var flag=0;

while(low<upp){
    let curSum=arr[low]+arr[upp]
}