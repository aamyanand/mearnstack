var samsungA52={
    brand:"samsung",
    price:24000,
    band:"4G",
    display:"amoled",
    processor:"snapdragon"
}

var samsungA52s={
    price:3400,
    band:"5G"
}

samsungA52s.__proto__=samsungA52

console.log(samsungA52s.display);