//global variables possibly needs to change to local variables

//start with game starting once document is ready

var wins = 0 ;
var numberOfGuesses = 10;
var answer1 = [ "k", "a","t", "a", "r", "a"];
var answer2 = ["a", "a", "n", "g"];
var answer3 = ["s","o","k","k","a"];

 


// first track keystrokes/ keypress
document.addEventListener("keyup", function(event){
    
    for(var i = 0; i < answer1.length; i++){

       if(event.key === answer1[i]){
        console.log(answer1[i])
       }
       else if (event.key != answer1[i]){
           numberOfGuesses -= 1;
           console.log(numberOfGuesses)
       }
       
    }

    
})

// create conditional that if above event is equal to a written statement do not write again

// create a condition that once all input from the "answer1" is printed, other arrays input replaces previous array

//make other arrays local variables

//


   
// create a condition that once user keyinput is not equal to array, subtract value from guesses
// create another condition that displays images in folder in the images column once new array starts

//
//

