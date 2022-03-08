var employee={
    id:1000,
    emp_name:"ram",
    desig:"developer",
    salary:25000,
    exp:1
}

for(var key in employee){
    console.log(key);                // key=id,emp_name,desig,salary,exp
    console.log(employee[key]);      // employee[id]
}