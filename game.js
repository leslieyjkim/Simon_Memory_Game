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

     checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        } 
    } else {
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        //2. Call startOver() if the user gets the sequence wrong.
        startOver();
    }

}


function nextSequence() {

    //6. Once nextSequence() is triggered, reset the 'userClickedPattern' to an empty ready for the enxt level.
    userClickedPattern = [];

    level++;  //inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    $("#level-title").text("Level " + level); //inside nextSequence(), update the <h1> with this change in the value of level.

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


//1. Create new function called 'startOver()'.
function startOver() {
    //3. you will need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
}