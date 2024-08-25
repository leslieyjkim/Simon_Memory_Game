# HOW TO PLAY
At this point, it might be worth reviewing how the Simon game works.

Firstly, the game shows the first colour in the sequence (blue). The user clicks on the blue button.

Next, the game shows the next colour (red), the user has to remember the sequence is blue, red and so on and so forth.

If the user messes up the sequence, then the game ends.
# GAME LOGIC
You can either try to figure out how to achieve this logic by trying to write the code yourself or you can follow the challenge steps below:

1. Create a new function called checkAnswer(), it should take one input with the name currentLevel

2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.

3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.

4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.

5. Call nextSequence() after a 1000 millisecond delay.

6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

In the next few challenges, we'll address what happens when the user get's the pattern wrong and how to restart the game.
