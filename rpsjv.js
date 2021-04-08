
function game() {
  
   let ys = 0;
   let cs = 0;
   let pp = prompt("ENTER YOUR OPTION", "");
   let upp = pp.toUpperCase();
   console.log(upp);

   var myArray = [
      "ROCK",
      "PAPER",
      "SIS"
   ];

   var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
   var cc = randomItem;
   console.log(cc);

   if (upp == cc) 
      {
         console.log('no winner');

      }
   else if (upp == "ROCK") {
         if (cc == "PAPER") {
            console.log("you loss");
           return cs = cs + 1;
         }
         else if (cc == "SIS") {
            console.log("you win")
           return ys = ys + 1;
         }
      }
      else if (upp == "PAPER") {
         if (cc == "SIS") {
            console.log("you loss");
           return cs = cs + 1;
         }
         else if (cc == "ROCK") {
            console.log("you win")
           return ys = ys + 1;
         }
      }
      else if (upp == "SIS") {
         if (cc == "ROCK") {
            console.log("you loss");
          return  cs = cs + 1;
         }
         else if (cc == "PAPER") {
            console.log("you win")
           return ys = ys + 1;
         }
      }

   }



game();
