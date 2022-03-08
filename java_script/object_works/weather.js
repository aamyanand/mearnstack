var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"thrissur",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20}
]
var weatherOut={}
for(let record of data){
    let distrcitName=record["districtname"]
    let curTemp=record["weather"]
    if(distrcitName in weatherOut){
        let oldTemp=weatherOut[distrcitName]
        if(curTemp>oldTemp){
            weatherOut[distrcitName]=curTemp
        }
    }
    else{
        weatherOut[distrcitName]=curTemp
    }
}
console.log(weatherOut);

console.log(Object.entries(weatherOut).sort((r1,r2)=>r2[1]-r1[1]))