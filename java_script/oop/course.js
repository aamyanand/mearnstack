class Course{
    setCourseDetails(c_name,fee,duration){
        this.courseName=c_name;
        this.fees=fee;
        this.duration=duration;
    }
    printCourseDetails(){
        console.log(this.courseName,this.fees,this.duration);
    }
}

// object / instance

var ms=new Course()
ms.setCourseDetails("mearnstack",50000,5)
ms.printCourseDetails()

var django= new Course()
django.setCourseDetails("django",45000,5)
django.printCourseDetails()