console.log("Running 02-numberCompare");
var num1, num2, choice;

choice = prompt("Use default numbers? (y/n): ");

if(choice=="Y" || choice=="y"){
  num1 = "21";
  num2 = "93";
}else{
  while(isNaN(num1)){
    num1 = prompt("Enter first number: ");
  }
  while(isNaN(num2)){
    num2 = prompt("Enter second number: ");
  }
}

console.log("number 1 is " + num1);
console.log("number 2 is " + num2);

if(parseFloat(num1) == parseFloat(num2)){
  console.log(num1 + " == " + num2);
  alert(num1 + " equals " + num2);
}else if(parseFloat(num1) > parseFloat(num2)){
  console.log(num1 + " > " + num2);
  alert(num1 + " is larger than " + num2);
}else{
  console.log(num1 + " < " + num2);
  alert(num1 + " is smaller than " + num2);
}

 console.log("02-numberCompare Complete")
