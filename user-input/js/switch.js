//condition: Switch statements
/*Syntax
switch (expresiion or value) {
    case choice1:
    //run this code
    break;

    case choice2:
    //run this this different code
    break;

    case choice3:
    //add as many use cases as needed
    break;

    default:
        //run this code if no case matches
        //no need for break here.
}*/

switch (Math.floor(Math.random()* 5 +1)) {
    case 1:
    console.log(1)
    break;

    case 2:
    console.log(2)
    break;

    case 3:
    console.log(3)
    break;

    default:
        console.log('no match')
}