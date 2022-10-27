function startGame() {
  let choices = ["Rock","Paper","Scissors"];

  random = Math.floor(Math.random()*3);
  computer=choices[random];
  document.getElementById('demo2').innerHTML = computer + "  was the previous choice " ;
  player = prompt("Enter your choice");


 /*if (player == "Rock" && computer == "Scissors"||player == "Paper" && computer == "Rock" || player == "Scissors" && computer == "Paper")
  {
    alert("You Won");
  }
  else if (computer == "Rock" && player == "Scissors"||computer == "Paper" && player == "Rock" || computer == "Scissors" && player == "Paper")
  {
    alert("Computer Won");
  }
  else
  {
    alert ("it's a tie");
  }*/

  if (player == "Rock" && computer == "Scissors")
   {
     alert("You Won");
   }

  else if (player == "Paper" && computer == "Rock")
  {
    alert("You Won");
  }
  else if (player == "Scissors" && computer == "Paper")
  {
    alert("You Won");
  }
   else if (computer == "Rock" && player == "Scissors")
   {
     alert("Computer Won");
   }
   else if (computer == "Paper" && player == "Rock" )
   {
     alert("Computer Won");
   }

   else if ( computer == "Scissors" && player == "Scissors")
   {
     alert("Tie");
   }
   else if ( computer == "Paper" && player == "Paper")
   {
     alert("Tie");
   }
   else if ( computer == "Rock" && player == "Rock")
   {
     alert("Tie");
   }
   else
   {
     alert ("Enter a valid choice");
   }


}
