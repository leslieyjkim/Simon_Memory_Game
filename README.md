[!Screenshot](https://github.com/leslieyjkim/Simon_Memory_Game/blob/main/main.png?raw=true)

# DEMO
https://leslieyjkim.github.io/Simon_Memory_Game/

# Simon Game
This is a web-based implementation of the classic Simon memory game, built using HTML, CSS, and JavaScript. The game challenges players to recall and replicate an increasingly complex sequence of colors.

# How to Play
1. Start the Game: The game starts when the user presses any key. The game will display the first color in the sequence.
2. Memorize the Sequence: After viewing the color, the user must click on the corresponding button to proceed.
3. Repeat the Sequence: With each level, a new color is added to the sequence. The player must remember and repeat the entire sequence in the correct order.
4. Game Over: If the player clicks the wrong color, the game ends. A "Game Over" message will be displayed, and the user can restart the game by pressing any key.

# Features
* Dynamic Game Sequence: The game randomly generates a new color for each level, making every playthrough unique.
* Visual and Audio Feedback: The game uses both visual cues and sound effects to enhance the user experience.
* Responsive Design: The game is fully responsive and can be played on devices of all screen sizes.

# Code Structure
* HTML: Provides the basic structure of the game interface.
* CSS: Handles the styling of the game, including button animations and layout.
* JavaScript: Contains the game logic, including sequence generation, user input handling, and game state management.

# Future Plans
* Mobile Optimization: Further enhancements to improve the game experience on mobile devices.
* Score Tracking: Implement a score tracking system to keep a record of the player's best performance.
* Multiplayer Mode: Introduce a multiplayer mode where two players can compete against each other in real-time.
* Advanced Levels: Add more challenging levels with increased complexity, such as faster sequences or more colors.
* Custom Themes: Allow users to select different themes or color palettes for a personalized experience.

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
