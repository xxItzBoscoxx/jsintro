console.log("Running 03-functionCombine");
var str1, str2, choice;

choice = prompt("Use default strings? (y/n): ");

if(choice=="Y" || choice=="y"){
  str1 = "hello";
  str2 = "goodbye";
}else{
  str1 = prompt("Enter first string: ");
  str2 = prompt("Enter second string: ");
}

console.log("string 1 is " + str1);
console.log("string 2 is " + str2);

concat(str1, str2);

console.log("03-functionCombine Complete");


function concat(str1, str2){
  console.log(str1 + " + " + str2 + " = " + str1 + str2);
  alert("Concatenated string is: " + str1 + str2);
}
