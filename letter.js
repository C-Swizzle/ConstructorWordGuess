var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capsAlphabet=[];
for (var i=0;i<alphabet.length;i++){
    capsAlphabet.push(alphabet[i].toUpperCase());
}

function obfuscate(str){
    var tempArray=[];
    for (var i=0;i<str.length;i++){
        if(capsAlphabet.indexOf(str[i])===-1&&alphabet.indexOf(str[i])===-1){
            tempArray.push(str[i]);
        }
        else {
            tempArray.push("_");
        }
    }
    return tempArray.join(" ");
}
console.log(obfuscate("hello there"));
function checkHidden(hiddenStr,rawStr,keypress){
    var tempRawStrFormatArray=[];
    var tempHiddenStrFormatArray=[];
    for(var i=0;i<rawStr.length;i++){
        tempRawStrFormatArray.push(rawStr[i]);
    }
    tempRawStrFormatArray.join(" ");
    for(var i=0;i<hiddenStr.length;i++){
        tempHiddenStrFormatArray.push(hiddenStr[i]);
    }
    for (var i=0;i<tempRawStrFormatArray.length;i++){
        if(keypress===tempRawStrFormatArray[i]){
            tempHiddenStrFormatArray[i]=tempRawStrFormatArray[i];
        }
    }
    return tempHiddenStrFormatArray.join("");
}

var obfuscated=obfuscate("hello there");
console.log(checkHidden(obfuscated,"hello there","h"));