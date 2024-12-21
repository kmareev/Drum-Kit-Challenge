//Detecting button press
let noOfDrums = document.querySelectorAll(".drum");
noOfDrums.forEach(button => {
    button.addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
});

//Detecting keypress
document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'a':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log();

    }

}

// Adds animation when key is pressed and removes animation after
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
        
    }, 100);

}
 









/* var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play(); 
    });
}

 */


/* document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyW') {
        var crash = new Audio("sounds/crash.mp3");
        crash.play(); 
    }   else if (event.code === 'KeyA') {
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
    } else if (event.code === 'KeyS') {
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    } else if (event.code === 'KeyD') {
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    } else if (event.code === 'KeyJ') {
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    } else if (event.code === 'KeyK') {
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    } else if (event.code === 'KeyL') {
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }

}); */
