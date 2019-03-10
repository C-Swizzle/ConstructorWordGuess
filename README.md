# ConstructorWordGuess

This is a node based command line application which essentially is hangman. 
In order to run this game, you will need to `npm install` within the root directory, with node.js installed on your machine.

The typical gameplay flow shows the user a number of blank spaces which can be a word of that length. The user is prompted for a guess
and if the guessed letter is part of the word, that is revealed, otherwise the user loses a try.

After the word is revealed or the user runs out of tries, the game ends. If the user loses, the word is still revealed at the end. 


Some screenshots of the gameplay can be found below.

[Beginning User Prompt](./assets/gamestart.PNG)  
[Correct Guess](./assets/correct.PNG)  
[Incorrect Guess](./assets/incorrect.PNG)  
[Input of more than one letter](./assets/morethanone.PNG)  
[User win](./assets/WIN.PNG)  
[User loss](./assets/loss.PNG)  