
//changes by tanisha

var n = document.querySelectorAll(".drum").length;
for (i = 1; i <= n; i++) {
  document
    .querySelectorAll(".drum")
    [i - 1].addEventListener("click", function () {
      var word = this.innerHTML;
      playsound(word) ;
       
    });
    document.addEventListener("keypress",function(event){
      playsound(event.key);
   });
    function playsound( word){
      switch (word) {
         case "a":
           var audio = new Audio("sounds/tom-1.mp3");
           audio.play();
           break;
         case "s":
           var audio = new Audio("sounds/tom-2.mp3");
           audio.play();
           break;
         case "d":
           var audio = new Audio("sounds/tom-3.mp3");
           audio.play();
           break;
         case "f":
           var audio = new Audio("sounds/tom-4.mp3");
           audio.play();
           break;
         case "j":
           var audio = new Audio("sounds/crash.mp3");
           audio.play();
           break;
         case "k":
           var audio = new Audio("sounds/kick-bass.mp3");
           audio.play();
           break;
         case "l":
           var audio = new Audio("sounds/snare.mp3");
           audio.play();
           break;
         default:
           console.log(word);
           break;
       }
    }
    
}
