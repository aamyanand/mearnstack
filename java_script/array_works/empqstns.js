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

console.log(employees.map(emp=>emp[1]));

var developers=employees.filter(emp=>emp[2]=="developer");
console.log(developers);