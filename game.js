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
    
     //2. Call checkAnswer() after a user has clicked and chosen answer, 
     //passing in the index of the last answer in the user's sequence
     //ex) if the user has pressed [red, greedn red, yellow] the index of last answer is '3'.
     checkAnswer(userClickedPattern.length-1);
});


//1.Create function, it should take one input w/ the name currentLevel
function checkAnswer(currentLevel) {
    //3. Write if statement to check if the most recent user answer is the same as the game pattern.
    //if so then log "success", otherwise log "wrong"
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
    } else {
        console.log("wrong");
    }

}

//Why console.log???
//You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. 
//Once you're done, feel free to remove these log statements.

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
