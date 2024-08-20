var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = []; 


$(".btn").click(function() {
     //Inside the handler, you can use the keyword "this" to refer to the button object that triggered the click.
     var userChosenColour = $(this).attr("id");
     userClickedPattern.push(userChosenColour); 
     //console.log(userClickedPattern);
     playSound(userChosenColour); //when a user clicks on a button, the corresponding sound should be played.
});

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColour);
  }

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

