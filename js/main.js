
/*
  This script greets the user by checking on the current time.
 */
var greeting ;
var today  = new Date();          // Create a new date object,which is an inbult javascript object.
                                  //Global Javascript object.
var hourNow = today.getHours();  //Find the current hour

// Display the appropriate greeting based on  the current time.
if (hourNow > 18){
    greeting = 'Good Evening ';
}
else if(hourNow > 12){
    greeting='Good Afternoon ';
}
else if (hourNow > 0 ){
    greeting ='Good Morning ';
}
else{
    greeting = 'Welcome ';
}
document.write('<h3 class= "animated bounce" >' + greeting + '</h3>')
