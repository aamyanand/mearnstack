var accountDetails={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}

// Q. create a function validateAccountNo(accno) if accno exist return true else return false

function validateAccountNo(accno){
    return accno in accountDetails?true:false
}
console.log(validateAccountNo(1007));  //false


// Q. create a function authenicate(accno,password) if given credential are correct
// return access granted else return permission denied

function authenticate(accno,password){
    if(validateAccountNo(accno)){
        let pwd=accountDetails[accno].password
        if(pwd==password){
            return "Login success";
        }
        else{
            return "Invalid password";
        }

    }
    else{
        return "Invalid account number";
    }
}
console.log(authenticate(1003,"user"));  //permission denied
console.log(authenticate(1002,"userthree"));  //permission granted
