console.log("Running 04-functionConditions");
var choice, option;

alert("Stop! You see a fish flopping in the road!")
choice = prompt("Pick a number 1-3 to proceed or use 'D' for default options: ");

if(choice=="D" || choice=="d"){
  option = 4;
}else if(choice == 1 || choice == 2 || choice == 3){
  option = choice;
}else{
  if(isNaN(option)){
    option = 5;
  }
}

console.log("option chosen: " + option);

fishesFate(option);

console.log("04-functionConditions Complete");

function fishesFate(option){
  if(option == 1){
    console.log("User chooses good.\nUser picks up the fish and places it in a nearby pond of the same type of fish.");
    alert("You decided to perform a good deed today. You place the fish in the nearby pond with the other fish, allowing the fish to live a long happy life. You then continue on your journey.")
  }else if(option == 2){
    console.log("User chooses neutral.\nUser decides to not let the fish go to waste and quickly sets up a campfire to cook and eat the fish.");
    alert("You are hungry and decide to be resourceful. You quickly set up your campfire, cook, and eat the fish before continuing on your journey.");
  }else if(option == 3){
    console.log("User chooses evil.\nUser decides to play hackey-sack with the fish.");
    alert("You exclaim 'LOL' before begining to play hackey-sack until there is nothing left of the fish.");
  }else if(option == 4){
    console.log("User was too indecisive.\nUser stands still, unsure of what to do, watching as the fish suffocates.");
    alert("You were too indecisive to pick an option yourself. You stand, frozen, as you watch the fish slowly suffocate to death.");
  }else{
    console.log("User is not very smart.\nUser decides to perform a burial at sea for the fish to allow the other fish time to mourn. The fish was still alive. It swims away.");
    alert("Your heart was in the right place but your brain is far behind. While performing a burial at sea for the suffocating fish, it is revived by the water and swims away.");
  }
}
