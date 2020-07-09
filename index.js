var g_timesPageLoaded = 0;
localStorage.setItem("pgCtr", g_timesPageLoaded);
g_timesPageLoaded++;

//handles only 1 button
// document.querySelector("button").addEventListener("mousedown",
// () => console.log(`Button got clicked.`));

//handles all buttons
let btnsNodeList = document.querySelectorAll(".drum");

// Array.prototype.forEach.call(btnsNodeList, function () {
//   document.addEventListener("mousedown", (btnsNodeList) => {
//     console.log(`Button was clicked.`);
//   });
// });

//folder path
let audioFolder = "sounds/";

//audio files name
let audioFiles = [
  "tom_1.mp3",
  "tom_2.mp3",
  "tom_3.mp3",
  "tom_4.mp3",
  "snare.mp3",
  "crash.mp3",
  "kick_bass.mp3",
];

//create an array of audio files paths
const audioFilesPath = [
  `${audioFolder}${audioFiles[0]}`,
  `${audioFolder}${audioFiles[1]}`,
  `${audioFolder}${audioFiles[2]}`,
  `${audioFolder}${audioFiles[3]}`,
  `${audioFolder}${audioFiles[4]}`,
  `${audioFolder}${audioFiles[5]}`,
  `${audioFolder}${audioFiles[6]}`,
];

//object to hold all the audio files.
var audioObjs = {};     

//create audio files
audioFiles.forEach((elem) => {
  let temp1 = elem;
  temp1 = temp1.substring(0, temp1.indexOf("."));                 //strip .mp3 extension
  audioObjs[temp1] = new Audio(audioFilesPath[audioFiles.indexOf(elem)]);   
  console.log(temp1);
  console.log(audioObjs);
});



//named handler function respond to click or keybrd events
const playAudio = function(evt){
    evt.code;
    console.log(evt);
    console.log(evt.keyCode);
    console.log(`Button ${this.innerHTML} clicked.`);
    switch(this.innerHTML || evt.code){
        case "w":
        case "KeyW":
            audioObjs.tom_1.play();
            break;
        case "a":
        case "KeyA":
            audioObjs.tom_2.play();
            break;
        case "s":
        case "KeyS":
            audioObjs.tom_3.play();
            break;
        case "d":
        case "KeyD":
            audioObjs.tom_4.play();
            break;
        case "j":
        case "KeyJ":
            audioObjs.snare.play();
            break;
        case "k":
        case "KeyK":
            audioObjs.crash.play();
            break;
        case "l":
        case "KeyL":
            audioObjs.kick_bass.play();
            break;
        default:
            console.log("Not a valid selection.");
    }

    }

//add event listener to each button
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playAudio);
}

//add keydown event listener to webpage
document.addEventListener("keydown", playAudio);


//this.style.color = "white";




