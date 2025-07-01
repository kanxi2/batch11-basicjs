//if case

const gender = confirm("are u male ?");
if (gender){ 
    alert("you are male");
} else { 
    alert("you are female");}

    //multiplr case
const day =prompt("what day is today?");
switch (day) {
    case "sun":
        alert("Today is Sunday");
        break;
    case "mon":
        alert("Today is Monday");
        break;
    case "tue":
        alert("Today is Tuesday");
        break;
    case "wed":
        alert("Today is Wednesday");
        break;
    case "thu":
        alert("Today is Thursday");
        break;
    case "fri":
        alert("Today is Friday");
        break;
    case "sat":
        alert("Today is Saturday");
        break;
    
        
    const grade = Number(prompt("Your grade is?"));

switch (true) {
  case (grade <= 100 && grade >= 80):
    alert("Your grade is A+");
    break;
  case (grade < 80 && grade >= 70):
    alert("Your grade is A");
    break;
  case (grade < 70 && grade >= 60):
    alert("Your grade is B+");
    break;
  case (grade < 60 && grade >= 50):
    alert("Your grade is C");
    break;
  case (grade < 50 && grade >= 0):
    alert("You are fail");
    break;
  default:
    alert("Invalid grade");
}
}

const mygender =confirm("are you male");
mygender ? alert("you are female") :alert("you are male" )


