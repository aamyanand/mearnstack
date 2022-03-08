
var text="hello hai hello hai"
// wordcount={hello:2,hai:2}

//step 1: split string into words
var words=text.split(" ")
console.log(words);

//step 2: create an empty object
var wordCount={}

for(let word of words){
    if(word in wordCount){
        wordCount[word]+=1
    }
    else{
        wordCount[word]=1
    }
}
console.log(wordCount);


//less complexity code

// text.split(" ").map(word=>word in wordCount?wordCount[word]+1:wordCount[word]=1)
// console.log(wordCount);