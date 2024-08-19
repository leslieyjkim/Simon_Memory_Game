const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    const randomChosenColour = buttonColours[randomNumber];
    //Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

    gamePattern.push(randomChosenColour);
    //Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //The # in $("#" + randomChosenColour) is a selector in jQuery that refers to an HTML element's id attribute.
    //"#" + randomChosenColour forms a string like "#red", "#blue", etc.
    //So, $("#red") would select the element with id="red" in your HTML.
    //visualize 0.1 sec visible -> 0.1 sec  invisible -> 0.1 sec visible

    const audio = new Audio("./sounds" + randomChosenColour + ".mp3"); //For example, if randomChosenColour is "red", the code will create an audio object for the file "sounds/red.mp3".
    audio.play(); //This method plays the audio file that was just created. When this line of code runs, the sound associated with the selected color will play.


}