const inquirer=require("inquirer");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capsAlphabet=[];
for (var i=0;i<alphabet.length;i++){
    capsAlphabet.push(alphabet[i].toUpperCase());
}
const Word=require("./letter");
var wordArray=["something","Going Back to cali","back to the future","laptop"];
var otherword= new Word(wordArray[Math.floor(Math.random()*wordArray.length)]);
// console.log(word);

function guess(word){
    console.log(word.hidden.join(" "));
inquirer.prompt([
    {message:"Guess a letter",
name:"userGuess",type:"input"}
]).then(function(response){
    if(response.userGuess.length>1){
        console.log("One letter at a time!");
        // console.log(word.hidden.join(" "));
        guess(word);
    } else if(capsAlphabet.indexOf(response.userGuess)===-1&&alphabet.indexOf(response.userGuess)===-1){
        console.log("Letters only!");
        guess(word);
    }
    else{
    word.checkLetter(response.userGuess);
    if (word.stillPlaying){
        guess(word);
    } else{
        return;
    }
}
})
}
guess(otherword);