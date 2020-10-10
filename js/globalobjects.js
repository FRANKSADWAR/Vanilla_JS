var say = 'Home sweet home';
say.length;
say.toUpperCase();
say.toLowerCase();
say.indexOf('H');
say.lastIndexOf('sweet');
say.substring(0,10);
say.replace('Home','Place');
say.concat('  Hellow');



/**
 * Javascrpt has 5 primitive data types that is; String,Number,Boolean,Undefined and Null
 * Undefined is a variable that has been declared but has not been assigned a value yet.
 * Null is a variable with no value.
 * 
 * Javascript also defines a complex data type that is the Object.Under the hood arrays and functions
 * are also objects.Functions are objects with additional features being that they are callable.
 */


 var fr_no = 7780.0000;
 fr_no.toFixed(3);
 fr_no.toString();
 fr_no.toPrecision(3);
 fr_no.toExponential();
 fr_no.toLocaleString();


 /**
  * The Math Object also has properties and methods for 
  * Mathematical constants and operatons.
  */

var x = Math.sqrt(Math.PI);
var dE = 89.00;
var dN = 78.91;
var dist = Math.sqrt(Math.pow(dE,2) + Math.pow(dN,2));

var azimuth_rads = Math.atan2(dN,dE);
var azimuth_degrees = (azmuth_rads) * (360/2(Math.PI));
console.log(azimuth_degrees);

// Alternatively 
var azimuth_rads_b = Math.atan(dN/dE);
var azimuth_degrees_b = (azimuth_degrees_b) * (360/2(Math.PI));

/*
The line below finds a random number between 0 and 9,which means decimals too.
Using the Math.floor() which only rounds down and to 1 so that the number is between 1 and 10.
*/

var x = Math.floor((Math.random() * 10 )) +1;

/**
 * -----------Creating A Date Object-----------
 * 
 *  To create a date object use the Date() object constructor.By default the date object will create and hold
 *  the current date.If you want any other you have to explicitly state that.
 *  var today = new Date();
 *  
 * For different date use: 
 *  var another_day = new Date(1996,12,16);
 *  var dob = new Date('Dec 16 ,1996 21:35:55 ');
 *  var bob_w = new Date(1996,12,16,21,35,55);
 *   
 *   Year  ------ four digits
 *   Month -----  0-11(Jan is 0)
 *   Day   -----  0-31
 *   Hour  ------ 0-23
 *   Minutes ---- 0-59
 *   Seconds ---- 0-59 
 *   Milliseconds --- 0-999
 * 
 * YYYY, MM, DD, HH, MM, SS
 * 1996, 04, 16, 15, 55, 45
 * 
 * or another format would be:
 * MMM DD,YYYY HH:MM:SS
 * Apr 16,1996 15:55:45
 * 
 */

var today = new Date();
var dob = new Date('Nov 17,1990 23:50:55');
dob.getMonth () + 1;