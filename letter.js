var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capsAlphabet=[];
for (var i=0;i<alphabet.length;i++){
    capsAlphabet.push(alphabet[i].toUpperCase());
}
const inquirer=require("inquirer");
// function obfuscate(str){
//     var tempArray=[];
//     for (var i=0;i<str.length;i++){
//         if(capsAlphabet.indexOf(str[i])===-1&&alphabet.indexOf(str[i])===-1){
//             tempArray.push(str[i]);
//         }
//         else {
//             tempArray.push("_");
//         }
//     }
//     return tempArray.join(" ");
// }
// console.log(obfuscate("hello there"));
// function checkHidden(hiddenStr,rawStr,keypress){
//     var tempRawStrFormatArray=[];
//     var tempHiddenStrFormatArray=[];
//     for(var i=0;i<rawStr.length;i++){
//         tempRawStrFormatArray.push(rawStr[i]);
//     }
//     tempRawStrFormatArray.join(" ");
//     for(var i=0;i<hiddenStr.length;i++){
//         tempHiddenStrFormatArray.push(hiddenStr[i]);
//     }
//     for (var i=0;i<tempRawStrFormatArray.length;i++){
//         if(keypress===tempRawStrFormatArray[i]){
//             tempHiddenStrFormatArray[i]=tempRawStrFormatArray[i];
//         }
//     }
//     return tempHiddenStrFormatArray.join("");
// }

// var obfuscated=obfuscate("hello there");
// console.log(checkHidden(obfuscated,"hello there","h"));


function WordGuess(phrase){
    this.word=phrase.toUpperCase();
    var tempArray=[];
    this.attemptsRemain=10;
    this.stillPlaying=true;
    this.alreadyGuessed=[];
    for (var i=0;i<phrase.length;i++){
        if(capsAlphabet.indexOf(phrase[i])===-1&&alphabet.indexOf(phrase[i])===-1){
            tempArray.push(phrase[i]);
        }
        else {
            tempArray.push("_");
        }
    }
    this.hidden=tempArray;
   
    this.checkLetter=function(letter){
        if(this.alreadyGuessed.indexOf(letter)===-1){
            this.alreadyGuessed.push(letter);
        
        var temp=false;
        for (var i=0;i<this.word.length;i++){
            if(letter.toUpperCase()===this.word[i]){
                this.hidden[i]=this.word[i];
                var temp=true;
            }
        }
        if(temp){
        console.log("You guessed "+letter.toUpperCase()+" correctly!");

        } else{
        console.log("You guessed "+letter.toUpperCase()+" incorrectly!");

        }
        this.showSpaces(temp);

    } else{
        console.log("You already guessed "+letter);}
        // console.log(this.hidden.join(" "));

    }
    this.showSpaces=function(bool){
        // console.log(this.hidden.join(" "));
        if(bool){
            this.win();
        }else{
            this.lose();
        }
    }
    this.win=function(){
        console.log("Attempts Remaining: "+ this.attemptsRemain);
        this.checkOver();
    }
    this.lose=function(){
        if(this.attemptsRemain===1){
            // console.log("You lose!");
            this.exit();
        }else{
        this.attemptsRemain--;
        console.log("Attempts Remaining: "+ this.attemptsRemain);
        }
        
    }
    this.exit=function(){
        console.log("Sorry! You've lost!");
        this.stillPlaying=false;
    }
    this.checkOver=function(){
        if(this.word===this.hidden.join("")){
        console.log("Congratulations! You've Won!");
        this.stillPlaying=false;
        }
    }
};

var newWord = new WordGuess("Hello");
// console.log(newWord);
// newWord.checkLetter("e");
// newWord.checkLetter("l");
// newWord.checkLetter("f");
// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("f");

// newWord.checkLetter("o");

// newWord.checkLetter("h");
module.exports=WordGuess;