class Student{
    constructor(rol,st_name,course,total){
        this.rollno=rol;
        this.studentname=st_name;
        this.course=course;
        this.total=total;
    }
    printDetails(){
        console.log(this.rollno,this.studentname,this.course,this.total);
    }
}

var details= new Student(1000,"aamy","mearn",38500)
details.printDetails()


// variables are prepended with this   --- instance variables
// here setStudentDetails initializes instance variables
// basically constructors initialzes instance variables

//constructor name in diff

// python >>> init()
// java   >>> same as classname
// js     >>> constructor


// constructor
// automatically invoked while creating objects