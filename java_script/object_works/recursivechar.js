var pattern="ABBBCC"

var wc={}
for(let char of pattern){
    if(char in wc){
        console.log(`${char} is first recursive charachter`);
        break;
    }
    else{
        wc[char]=1
    }
}