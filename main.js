// Gets all the data keys values from the document
window.addEventListener("keydown", playSound);


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; // stops the function from doing anything more if there is no audio forthat key
    // Making able to play the audio again while its still playing
    key.classList.add("playing");
    // Resets the time of the playign sound to 0 to it can be replayed when clicked
    audio.currentTime = 0;
    audio.play();
}

// Removes the effects of clicked when de animation ends
function removeTransition(e){
    if(e.propertyName !== "transform") return // skip it if is not transform
    // console.log(this) -> THIS is = to what called this function
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// Add an event listener to each key so that when 
// the transition is ending it removes
keys.forEach(key => key.addEventListener("transitionend", removeTransition));