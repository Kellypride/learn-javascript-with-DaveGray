//user input
//shows user input and they click ok. displays a message for the user to acknowledge but doesn't return any value.
// alert('Hello World!');

/*//Confirm returns a true and false value. provides an opportunity for the user to confirm or cancel an action and returns a boolean (true for "OK", false for "Cancel").
let myBoolean = confirm ("0K === True\nCancel === false")
console.log(myBoolean)*/


//allows user input and returns the entered text.
let name = prompt("please enter your name")
if (name) {
    console.log(name.length)
    console.log(name.trim().length)
    console.log(name.trim())  
}else{
console.log("You didn't enter your name")
}
