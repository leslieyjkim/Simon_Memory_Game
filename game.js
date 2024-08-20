var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = []; 

//you only call nextSequence() on the first keypress, and started.
var started = false;

var level = 0; //Once game started, the <h1>'s text would be updated to level.

$(document).keypress(function() { //jQuery detect when any keyboard key has been pressed. 
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").click(function() {
     var userChosenColour = $(this).attr("id");
     userClickedPattern.push(userChosenColour); 

     playSound(userChosenColour);
     animatePress(userChosenColour);
});

function nextSequence() {

    level++;  //inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    $("level-title").text("Level " + level); //inside nextSequence(), update the <h1> with this change in the value of level.

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed"); //jQuery adding this 'pressed' class in the styles.css to the button gets clicked.

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100); 
};
