var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","bangalore",55000,3],
    [1000,"tinu","ba","bangalore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5]  
]

//q1
for(let employee of employees){
    console.log(employee[1]);
}

//q2
console.log(employees.length);

//q3
for(let emp of employees){
    if(emp[2]=="developer"){
        console.log(emp);
    }
}