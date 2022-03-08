var accounts = [
    {
        acno: 1000, ac_type: "savings", balance: 5000, transactions: [
            { to: 1001, amount: 500, note: "ebill", method: "g-pay"},
            { to: 1002, amount: 600, note: "geto", method: "neft"},
            { to: 1003, amount: 100, note: "rechrge", method: "phone-pe"}
        ]
    },
    {
        acno: 1001, ac_type: "savings", balance: 6000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pe"},
            { to: 1002, amount: 500, note: "geto", method: "neft"},
            { to: 1003, amount: 100, note: "rechrge", method: "phone-pe"}
        ]
    },
    {
        acno: 1002, ac_type: "current", balance: 8000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pe"},
            { to: 1001, amount: 5000, note: "geto", method: "neft"},
            { to: 1003, amount: 100, note: "rechrge", method: "phone-pe"}
        ]
    },
        {
        acno: 1003, ac_type: "current", balance: 8000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pe"},
            { to: 1001, amount: 500, note: "geto", method: "neft"},
            { to: 1002, amount: 100, note: "rechrge", method: "phone-pe"}
        ]
    }

]

// # total number of accounts ?

console.log(accounts.length);

// # print accounts with savings type ?

accounts.filter(data=>data.ac_type=="savings").forEach(account=>console.log(account.acno))

// # print balance of acno=1000 ?

var balance=accounts.find(data=>data.acno==1000).balance
console.log(balance);

// # print all gpay transactions ?

var gpayTransactions=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="g-pay")
console.log(gpayTransactions);

// # print credit transactions of 1002 ?

var creditTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
console.log(creditTrans);

var debitTransaction=accounts.find(data=>data.acno==1002).transactions

// # print highest balance account details ?



// # print transaction history of 1002 ?

var transHistory={debitTrans:debitTransaction,creditTran:creditTrans}
console.log(transHistory);

// var transHistory=[...creditTrans,...debitTransaction]    ------ spread operator