// conditional: if statements

//synax 
/*if (condition) {
    
} else {
    
}*/
const testScored = 20;
let conllegeStudent = true;
let grade;
 if (testScored >= 90 ) {
    grade = "A"
 }else if (testScored >= 80) {
    grade = "B+"
 }else if (testScored >= 70) {
    grade = "B"
 }else if (testScored >= 60) {
    grade = "C+"
 }else if (testScored >= 50) {
    grade = "C"
 }else{
    //Nested if statements
    if (conllegeStudent >= 40) {
    grade = "D+"
 } else  if(conllegeStudent >= 30){
    grade = "D"
 }else {
    grade = "F"
 }
 } 
 console.log(grade);
    

