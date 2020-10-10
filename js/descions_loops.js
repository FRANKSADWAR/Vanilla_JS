/**
 * ---------DESCIONS AND LOOPS----------
 * You van evaluate a situaton by comparing one value in the script to what
 * you expect it might be true.The results will bw boolean,true or false.
 *  ==    compares two values to see if they are the same
 *  ===   STRICT EQUAL TO compares two values to check that both data type and value are the same.
 *  !=    IS NOT EQUAL TO compares two values to see if they are not the same
 *  !==   STRICT NOT EQUAL TO compares two values to checthat both data type and value are not the same.
 *
 * In any condition,there is usually one operator and two operands.The operands are placed on each side of the operator,and can be 
 * values or  variables.
 * 
 */
var pass = 50;
var score = 90;
// check if user has passed
var hasPassed = score >= pass;

//Write the message to the page
var el = document.getElementById('pass');
el.textContent = 'Level Passed' + hasPassed;

/**
 * The operand does not have to be a single value or variable.It can be an expression.
 */
var score_1 = 90;
var score_2 = 78;
var highScore_1 = 75;
var highScore_2 = 96;

var compare = (score_1 + score_2) > (highScore_1 + highScore_2);
var elNew = document.getElementById('newscore');
elNew.textContent = 'New High Score' + compare;

/**
 * Logical Operators allow you to compare the results of one or more than one comparison operator.
 * ((5 > 2) && (2>=3))
 * The expression on the left and right both use comparison operators and both return false.The third uses a logical
 * operator which checks whether both expressions on either side return true,in this case they dont so it evaluates to false.
 *   && LOGICAL AND  If both expressions evaluate to true then the expression returns true.
 *                  It just one of these returns false,then the expression returns false.
 *   
 * || LOGICAL OR   e.g ((2 < 5) || (2 < 1)) returns true
 *                  true || true returns true
 *                  true || false returns true
 *                  false || true returns true
 *                  false || false returns false
 *  
 *  ! LOGICAL NOT !(2 < 1) returns true.This reverses the state of an expression.If it was false before the !,it returns true.
 *                  It it was true , it noew returns false. !(true) returns false, !(false) returns true  
 */  
// ....Using logical AND 
var sa1 = 8;
var sa2 = 9;
var p1=6;
var p2=7;
// scheck whether user passed both rounds,store result in variable
var passEach = ((sa1 >=p1) && (sa2>=p2));
console.log(passEach);

//Using logical OR and LOGICAL NOT
var s1 = 8;
var s2 = 9;
// CHECK whether user passed one of the two rouns,store result in variable
var minPass = ((s1>=p1) || (s2>=p2));
var mesg = 'Resit Required ' + !(minPass); // The logical not will invert the result of the Boolean operator so it is now false.

/**
 * ---------STATEMENTS--------
 */
var a = 75;
var msg = '';
function congrats(){
    msg+= 'Congratulatons !';
}
if (a  >= 65 ){
    congrats();
    msg+='Proceed to the Next Level..';
}
else{
    msg = 'Have another attempt';
}
var elCon = document.getElementById('proceed');
elCon.innerHTML = msg;


/**---------SWITCH STATEMENTS-------
 * A switch statement start with a variable called the switch value.Each case indicates a possible value for 
 * this variable and the code that should run if the variable matches that value.
 */
var msg;          // Message
var level = 2;    //Level,you can put any data type in here e.g an array
switch(level){
    case 1:
        msg = 'Good Luck on the first level';
        break;
    case 2:
        msg='Second of Three -keep going';
        break;
    case 3:
        msg = 'Final round,almost there';
        break; 
    default:
        msg='Good luck';
        break;           
}
var elAns = document.getElementById('answer');
el.textContent = msg;

// You can also switch within arrays
var nValues = [0,1,2,3];
var msgs;
var x = prompt('Enter a value 0 to 3');
switch(values[x]){
    case 0:
        msgs = 'Welcome for coming along,enjoy the challenge';
        break;
    case 1:
        msgs = 'Keep moving on this is just the beginning';
        break;
    case 2:
        msgs= 'One more step , you got this !';  
        break;
    case 3:
        msgs = 'We are here finally,this is the final step';
        break;
    default:
        msgs = 'Welcome again for the challenge';
        break;
}

/**
 * JavaScript can convert data types bhind the scenes to complete an operation.This is known as type coercion.For example ('10' > 0)
 * can evaluate to true because '10' has been converted to number yet it is string.
 * JS uses weak typing because data type for a value can change.
 */
