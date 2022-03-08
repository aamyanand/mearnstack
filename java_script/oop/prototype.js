// var baleno={
//     manufacture:"nexa",
//     price:10,
//     varients:["manual"],
//     color:["red","blue"]
// }

// var glanza={
//     manufacture:"toyota",
//     price:12
// }

// glanza.__proto__=baleno              // prototype inheritance

// console.log(glanza.manufacture);
// console.log(glanza.varients);




var language={
    name:"javascript",
    type:"interpreted",
    version:"'ES10"
}

var framework={
    name:"express"
}

framework.__proto__=language

console.log(framework.version);
console.log(framework.name);
console.log(framework.type);