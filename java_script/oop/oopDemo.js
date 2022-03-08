// object oriented programming

// class       ---- blue print/plan/design/template
// object      ---- a real world entity
// reference   ----


// constructing a building
// plan/design

// laptop  - class
// mi note - object


// tv            - class
// sony bravia   - object

// playVideo()
// changeBrightness()
// changeVolume()

// remote        - reference


// var employee={
//     name: "ram",
//     age: "25",
//     gender: "male"
// }


class employee{
    setEmployee(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    printEmployee(){
        console.log(this.name,this.age,this.gender);
    }
}

// creating object
// refName= new classname()

var emp= new employee
emp.setEmployee("ram",25,"male")
var emp1= new employee
emp1.setEmployee("ravi",30,"male")

// print

emp.printEmployee()
emp1.printEmployee()