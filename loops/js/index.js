// The while loop continues executing a code block as long as a specified condition is true.
  /*let myNumber = 0
  while (myNumber < 50){
    myNumber ++;
    console.log(myNumber)
  }*/

  /*//The do-while loop is similar to the while loop, but it guarantees that the code block is executed at least once, even if the condition is initially false
  do {
    myNumber ++;
    console.log(myNumber)
  }while (myNumber <= 20);*/

  //The for loop is a general-purpose loop that executes a code block a predetermined number of times. It consists of three parts within parentheses, separated by semicolons: (initialization, cond)ition, and increment
   for (myNumber = 1; myNumber <= 10; myNumber ++){
    console.log(myNumber)
   }

let name = "Kellypride";
   for (let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i))
   }