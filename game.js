const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    const randomChosenColour = buttonColours[randomNumber];
    //Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

    gamePattern.push(randomChosenColour);
    //Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
}