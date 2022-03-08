class Bank{

    accountDetails={
    
        1000:{
            account_number:1000,
            balance:3000,
            password:"userone",
            transactions:[]
        },
        
        1001:{
            account_number:1001,
            balance:2000,
            password:"usertwo",
            transactions:[]
        },
    
        1002:{
            account_number:1002,
            balance:4000,
            password:"userthree",
            transactions:[]
        },
    
        1003:{
            account_number:1003,
            balance:5000,
            password:"userfour",
            transactions:[]
        }
    }
    validate(accno){
        return accno in this.accountDetails?true:false
    }
    authenticate(accno,password){
        if(this.validate(accno)){
            let pwd=this.accountDetails[accno].password
            if(password==pwd){
                return"Login success"
            }
            else{
                return"Invalid password"
            }
        }
        else{
            return "Invalid account number"
        }
    }
    getBalance(accno){
        if(this.validate(accno)){
            return this.accountDetails[accno].balance
        }
    }
    fundTransfer(fromAccNo,toAccno,amount){
        if(this.validate(fromAccNo) && this.validate(toAccno)){
            let availBalance=this.getBalance(fromAccNo)
            if(amount>availBalance){
                return "Transaction failed. Insuffucient balance."
            }
            else{
                this.accountDetails[fromAccNo].balance-=amount
                this.accountDetails[toAccno].balance+=amount
            }

        }
        else{
            return "Invalid credentials"
        }
    }

}

var obj= new Bank()
console.log(obj.validate(1007));
console.log(obj.authenticate(1000,"userone"));
console.log(obj.getBalance(1002));
console.log(obj.fundTransfer(1000,1002,5000));