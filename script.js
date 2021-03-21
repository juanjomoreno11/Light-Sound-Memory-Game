// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [5, 2, 4, 5, 2, 1, 6, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes;

function generatePattern(){
  for (let i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random()*6) + 1;
  }
}

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    generatePattern();
  //The holt time is 1 sec at the beginning
    clueHoldTime = 1000;
    mistakes = 0;
    guessCounter = 0;
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
  
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions
// These frequencies represent
// The notes of shape of you
// By ed sheeran
const freqMap = {
  1: 278, // C#
  2: 330, // E
  3: 311, // D
  4: 247,  // B
  // Not in shape of you's melody
  // but these are also in the
  // C-sharp minor key
  5: 370, // F#
  6: 415, // G#
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    showImg(btn)
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    setTimeout(hideImg, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  //decrease holt time
  //to make game faster
  clueHoldTime -= 72;
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn){
    if (guessCounter < progress){
      guessCounter++;
      console.log("this is guess", guessCounter, " and this is progress", progress);
    }
    else if (guessCounter == progress){
      if (guessCounter == pattern.length -1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
  }
  else{
    mistakes++;
    if (mistakes == 3){
      loseGame();
    }
  }
  
}
function showImg(btn){
  document.getElementById("img"+btn).classList.remove("hidden");
}
function hideImg(btn){
  document.getElementById("img"+btn).classList.add("hidden");
}