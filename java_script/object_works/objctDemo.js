// var expenses=[10000,20000,30000,35000,40000,50000]
// console.log(expense[3]);

// object

// var expenses={
//     jan: 10000,
//     feb: 20000,
//     march: 30000,
//     april: 35000,
//     may: 40000,
//     june: 50000
// }

var student={
    roll: 01,
    name: "aamy",
    course: "stack",
    total: 36000
}

console.log(student.name);
console.log(student["course"]);

// add property

student["gender"]="female"       // through []
student.isVaccinated=true        // through .
student.vaccine="covishield"
console.log(student);

student.vaccine="co-vaxin"       // updation property
console.log(student);

student.total+=2500
console.log(student);



// check property

console.log("gender" in student);

