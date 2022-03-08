var arr=[10,11,1,2,3,14]
var element=2;
var flag=0;
for(let num of arr){
    if(num==element){
        flag=1;
        break
    }
}
console.log(flag==0?"not found":"found");