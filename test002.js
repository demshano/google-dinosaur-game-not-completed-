let character = document.getElementById('character');
let block = document.getElementById('block');

function jump(){

    character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove('animate'); //once we animate the class
 //   we should remove the class

    }, 500);
}


let checkdead = setInterval(function(){

    let characterTop=
    parseInt(window.getComputedStyle(character).
    getPropertyValue('top'));

    let blockLeft = 
    parseInt(window.getComputedStyle(block).
    getPropertyValue('left'));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation='none';
        block.style.animation.display='none';
        alert('you lost');
    }
}, 10);