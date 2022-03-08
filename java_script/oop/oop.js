class Parent{
    bike(){
        console.log("passion pro");
    }
}
class Child extends Parent{               // inheritance

    // bike(){
    //     console.log("highness");       // method overriding
    // }

}

var ch= new Child()
ch.bike()