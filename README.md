# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Juan Jose Castano Moreno**

Time spent: **8** hours spent in total

Link to project: (https://glitch.com/edit/#!/dark-lowly-weather?path=README.md%3A7%3A17)

## Required Functionality

The following **required** functionality is complete:

* [Yes] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Yes] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Yes] Game buttons each light up and play a sound when clicked. 
* [Yes] Computer plays back sequence of clues including sound and visual cue for each button
* [Yes] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Yes] User wins the game after guessing a complete pattern
* [Yes] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Yes] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Yes] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Yes] More than 4 functional game buttons
* [Yes] Playback speeds up on each turn
* [Yes] Computer picks a different pattern each time the game is played
* [Yes] Player only loses after 3 mistakes (instead of on the first mistake)
* [Yes] Game button appearance change goes beyond color (e.g. add an image)
* [No] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [No] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] The sound of the first four buttons of the game correspond to the four notes of "shape of you" melody by Ed Sheeran

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/46cc844f-c645-4444-992f-8e9254c24765%2Fezgif-7-2cd6ae5af83a.gif?v=1616307311275) 
![](https://cdn.glitch.com/46cc844f-c645-4444-992f-8e9254c24765%2Fdemo.gif?v=1616308287935)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  - https://www.w3schools.com/js/js_random.asp
  - https://www.rapidtables.com/web/css/css-color.html
  - http://peabody.sapp.org/class/st2/lab/notehz/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  The greatest challenge I encountered creating this project was regarding the sound. Up until the final version, the buttons wouldn't generate a sound when I click on them. I always have to cut the sound snippet of code and paste it again so that I can get sound. I even tried different browsers (Safari, Chrome, Opera) and tried in both macOS and Windows but I always had the same problem. I came to the conclusion that it has to be some sort of glitch because it doesn't make sense that the code doesn't work until I cut it and paste it back again. Apart from that, I was also unsure on the part of displaying images. After reading the useful resource on how images work on HTML, I was able to put some images on the web page but it took me a while to know how to put them inside the buttons until I realize I could do the same I did with the start/stop buttons but instead of a string, I inserted the image elements. I also didn't modify the CSS file to hide the images and display them when the buttton is clicked. Instead, I gave each of them an Id and assigned them to the .hidden class that was previously created. Then, I created two functions in the Javascript file. One for removing the .hidden class from the image class list and the other one for assigning the .hidden class again. I then called these two functions on the button tag declaration with onmousedown and onmouseup.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  After completing this submission I still have so many questions about web development that I can't wait to further learn about HTML, Javascript, and CSS. First of all, I wonder if there are any other layouts that can be used apart from the flow layout. From one of my java classes, I learned about java windows. So, I created some programs with flow layout and also grid layout. So it intrigues me what other layouts there are available. Furthermore, I remember having to use a special object called mouseListener in order for the buttons to be clicked, but in HTML it was more straighforward. I wonder if it's because HTML could be a higher level language, therefore everything looks more straightforward but it hides all of these proccesses behin .Moreover, I still want to learn more about how classes work on CSS and Javascript. I wonder if Javascript classes work the same way as a python or c++ obect with methods and data members. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  First of all, I would implement the other optional additional features that I havend't done. I would try to make the buttons play chords so that the user could listen to a pleasant harmony while playing the game. I would also set a timer so that the user has a limited amount of time before making a guess. Other than these, I also thought of getting an initial input from the user asking them how many buttons they want and then create the game based on the number specified by the user. For doing this, not onlt the amount of buttons would have to be variable but also the range of possible numbers in the pattern array. This would be a great implementation so that users could choose their own level of difficulty based on how good they feel about their memory skills.



## License

    Copyright [Juan Jose Castano Moreno]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.