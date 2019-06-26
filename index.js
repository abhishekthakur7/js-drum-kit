//Play sounds using click
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i=0; i < numberOfDrumButtons; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const innerText = this.innerText;
        playAudio(innerText);
        buttonAnimation(innerText);
    });
}

//Play sounds using key press
document.addEventListener("keypress", function(event)  {
    playAudio(event.key);
    buttonAnimation(event.key);
})

//Play the audio
function playAudio(drumKey) {
    let audio;
        switch (drumKey) {
            case 'w':
                audio = new Audio("sounds/tom-1.mp3");
                break;
            case 'a':
                audio = new Audio("sounds/tom-2.mp3");
                break;
            case 's':
                audio = new Audio("sounds/tom-3.mp3");
                break;
            case 'd':
	            audio = new Audio("sounds/tom-4.mp3");
	            break;
            case 'j':
                audio = new Audio("sounds/crash.mp3");
                break;
            case 'k':
                audio = new Audio("sounds/kick-bass.mp3");
                break;  
            case 'l':
                audio = new Audio("sounds/snare.mp3");
                break;         
            default:
                console.log(`wrong input: ${drumKey}`);
                break;
        }
        audio.play();
}

//Animate button
function buttonAnimation(key) {
    let currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");
    setTimeout(() => currentButton.classList.remove("pressed") , 100);
}