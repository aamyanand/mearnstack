var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidenseek",40,50],
    [103,"mom's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50]

]

//foreach

products.forEach(p=>console.log(p[2]))

//is there amy prdct costs greater than 10

//var IsAvailable=products.some(p=>p[2]==10)
//console.log(IsAvailable);

//is there any prdcts cost ranges from 10-20

//var IsAvailable=products.some(p=>p[2]>=10&&p[2]<=20)
//console.log(IsAvailable);

//print prdcts cost ranges from 10-20

//var IsAvailable=products.filter(p=>p[2]>=10&&p[2]<=20)
//console.log(IsAvailable);