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
            buttonAnimation(evt);
            break;
        case "a":
        case "KeyA":
            audioObjs.tom_2.play();
            buttonAnimation(evt);
            break;
        case "s":
        case "KeyS":
            audioObjs.tom_3.play();
            buttonAnimation(evt);
            break;
        case "d":
        case "KeyD":
            audioObjs.tom_4.play();
            buttonAnimation(evt);
            break;
        case "j":
        case "KeyJ":
            audioObjs.snare.play();
            buttonAnimation(evt);
            break;
        case "k":
        case "KeyK":
            audioObjs.crash.play();
            buttonAnimation(evt);
            break;
        case "l":
        case "KeyL":
            audioObjs.kick_bass.play();
            buttonAnimation(evt);
            break;
        default:
            console.log("Not a valid selection.");
    }

    }

//reset animation for mouse click
const resetAnimationClick = function(e){
    console.log(this);
    let element = document.getElementsByClassName(e.target.innerHTML)[0];
    element.classList.remove("pressed");
}

//reset animation for key realeased
const resetAnimationKeybrd = function(e){
    console.log(this);
    switch(e.code){
        case "KeyW":
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyJ":
        case "KeyK":
        case "KeyL":
            let activeBtn = document.querySelector("." + e.key);
            activeBtn.classList.remove("pressed");
            break;
        default:
            console.log("Not the correct key released.");
    }

}

//add event listener to each button
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("mousedown", playAudio);
  document.querySelectorAll(".drum")[i].addEventListener("mouseup", resetAnimationClick);
  
}

//respond to keyboard in the document
document.addEventListener("keydown", playAudio);
document.addEventListener("keyup", resetAnimationKeybrd);

//this.style.color = "white";

function buttonAnimation(e){
    //if mouseEvent do smth
    if(e.type === "mousedown"){
        switch(e.target.innerHTML){
        case "w":
        case "a":
        case "s":
        case "d":
        case "j":
        case "k":
        case "l":
            //returns HTML collection but we want the first and only element
            let element = document.getElementsByClassName(e.target.innerHTML)[0];
            console.log(element.outerHTML);
            element.classList.add("pressed");
            break;
        default:
            console.log("Not a valid button pressed.");

        }
         
    }
    //if keybrd pressed, do smth
    if(e.type === "keydown"){
        let activeBtn = document.querySelector("." + e.key);
        activeBtn.classList.add("pressed");
        console.log(this);
        
    }

}



