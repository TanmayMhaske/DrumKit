for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();


      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();


      break;
    case "s":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();


      break;
    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();

      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();


      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();


      break;
    case "l":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;
    case "z":
      var snare = new Audio('sounds/Conga.wav');
      snare.play();

      break;
    case "x":
      var snare = new Audio('sounds/Tablas.wav');
      snare.play();

      break;
    case "c":
      var snare = new Audio('sounds/bongo.wav');
      snare.play();

      break;
    case "v":
      var snare = new Audio('sounds/cymbal.wav');
      snare.play();

      break;
    case "b":
      var snare = new Audio('sounds/banjo.mp3');
      snare.play();
      break;

    case "n":
      var snare = new Audio('sounds/bass.wav');
      snare.play();
      break;

    case "m":
      var snare = new Audio('sounds/drumstick.wav');
      snare.play();

      break;


    default:
      console.log(innerHTML);

  }
}



function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
