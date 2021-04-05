console.log ("its working")
function playSound(e){
    //console.log(e)
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);       
    if (!audio) return;// stops the function from running if audio doesnt exist
    const key= document.querySelector(`div[data-key="${e.keyCode}"]`); 
    audio.currentTime=0; // rewinds audio to start
    audio.play();
    key.classList.add('playing')
}

function removeTransition(e){
    if(e.propertyName !="transform") return;
    this.classList.remove('playing');
    }

window.addEventListener("keydown", playSound);
const keys= document.querySelectorAll('.key')
keys.forEach(key=>key.addEventListener('transitionend', removeTransition));


