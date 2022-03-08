var baleno={
    name:"baleno",
    model:"hatchback",
    manufacture:"maruti",
    price:"10 lac"
}

console.log(baleno.manufacture);

if("model" in baleno){               // to print only if existing
    console.log(baleno.model);
}

baleno.variant=["manual"]            // adding
console.log(baleno);
baleno.variant.push("automatic")     // updating
console.log(baleno.variant);
baleno.color=["red"]                 // adding
console.log(baleno);
baleno.color.push("blue")            // updating
console.log(baleno.color);
