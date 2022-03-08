var arr=[10,11,12,15,16,17,20,21]

var element=15;
// var flag=0;
// var count=1;
// for(let num of arr){
//     if(num==element){
//         flag=1;
//         break;
//     }
//     count++;
// }
// console.log(flag==0?"element not found" :"found");
// console.log(count);


// drawback

// high complexity

flag=0;
var low=0, upp=arr.length-1;
while(low<upp){
    mid=Math.floor((low+upp)/2)
    if(element>arr[mid]){
        low=mid+1;
    }
    else if (element<arr[mid]){
        upp=mid-1
    }
    else if (element==arr[mid]){

        flag=1;
        break

    }
}
console.log(flag==0?"nf":"e f");