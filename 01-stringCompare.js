console.log("Running 01-stringCompare");
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

 if(str1 == str2){
   console.log(str1 + " == " + str2);
   alert(str1 + " and " + str2 + " are equal!");
 }else{
   console.log(str1 + " != " + str2);
   alert(str1 + " and " + str2 + " are not equal!");
 }

 console.log("01-stringCompare Complete")
