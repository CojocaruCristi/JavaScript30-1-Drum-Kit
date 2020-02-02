
function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio && !key)return;//end of the function
    audio.currentTime = 0;

    key.classList.add("playing");
    audio.play();
}

function removeTransition(e){
    if (e.propertyName !== 'transform')return;
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

addEventListener('keydown',playSound);