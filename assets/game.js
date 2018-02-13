//creates an array
        
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
        
//vars for storage wins, loses, guesses left, and guesses
        
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var choicesSoFar = [];
        
//print the initial values
        
document.getElementById("wins").innerHTML = wins;
document.getElementById("loses").innerHTML = loses;
document.getElementById("guesses_left").innerHTML = guessesLeft;
        
//function that trigger when user press a letter
        
document.onkeyup = function (event) {
            
    //the user choose a letter
            
    var userChoice = event.key;
            
    choicesSoFar.push(" " + userChoice);
            
    //the app randomly picks a letter in 26 posibilities
        
    var computerChoseLetter = letters[Math.floor(Math.random() * letters.length)];
            
    //the computer compares the letters
            
    if (computerChoseLetter === userChoice){    
                
        //User wins 1
                
        wins++;
                
        //Reset guesses left
                
        guessesLeft = 9;
                
        //Reset guesses so far
                
        choicesSoFar = [];
            
    } else {
                
        //user lost a chance from 9
                
        guessesLeft--;
                
        //if lose nine times reset to 0
                
        if (guessesLeft == 0){
                            
            loses++;
                    
            //if user makes 9 intents increment loses, and set guesses left to 9
                    
            guessesLeft = 9;
                    
            //Reset guesses so far
                    
            choicesSoFar = [];
        }
    }
            
            
    // Rewriting HTML to track the user and computer guesses, and wins/losses/guesses left.
            
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
    document.getElementById("guesses_left").innerHTML = guessesLeft;
    document.getElementById("guesses").innerHTML = choicesSoFar;
} 

        
        