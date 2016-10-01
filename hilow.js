// alert("test");
function userName() {
  var uName = document.getElementById("userName").value;
  document.getElementById("helloName").innerHTML = "Hello " + uName;
};


var randNumberGen = Math.floor((Math.random() * 100) + 1);
var count = 0;


function randomNum() {
  var uName = document.getElementById("userName").value;
 console.log(randNumberGen);
var guess = document.getElementById("userInput").value;
count = count + 1;
console.log(count)



   if (isNaN(guess)) {
     document.getElementById('hilowAnswer').innerHTML
      = "Invalid entry. Please enter a number";
      document.getElementById("userInput").value = "";

   }

   if (parseInt(guess) > randNumberGen) {
     document.getElementById('hilowAnswer').innerHTML
      = "Guess lower. Try again.";
      document.getElementById("userInput").value = "";

   }
   if (parseInt(guess) < randNumberGen) {
     document.getElementById('hilowAnswer').innerHTML
     = "Guess higher. Try again.";
     document.getElementById("userInput").value = "";

     if (count === 5) {
       alert("You have one more guess");

     }

     if (count === 6) {
       document.getElementById('hilowAnswer').innerHTML
       = "You LOST!@";
     }
   }
   //document.getElementById("userInput").value = "";


    if (parseInt(guess) === randNumberGen) {
    document.getElementById('hilowAnswer').innerHTML
    = uName + " you guessed right! You Win!";
  }


};

 // Game Ends
