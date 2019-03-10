const inquirer=require("inquirer");

const Word=require("./letter");
var wordArray=["something","Going Back to cali","back to the future","laptop"];
var word= new Word(wordArray[Math.floor(Math.random()*wordArray.length)]);
console.log(word);

function guess(){
inquirer.prompt([
    {message:"Guess a letter",
name:"userGuess",type:"input"}
]).then(function(response){
    if(response.userGuess.length>1){
        console.log("One letter at a time!");
        guess();
    } else{
    word.checkLetter(response.userGuess);
    if (word.stillPlaying){
        guess();
    } else{
        return;
    }
}
})
}
guess();