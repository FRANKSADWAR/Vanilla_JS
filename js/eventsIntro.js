/**
 * ------------EVENTS------------
 * JavaScript events can be handled in the following three ways:
 *  1.  HTML Event Handlers----This is bad practice and is only used in old code.
 *  2.  Traditional DOM Event Handlers
 *  3.  DOM Level 2 Event listeners
 * 
 */

 /** HTML Event handlers ....
  *  The code below uses the HTML event handlers,we can call the code by binding the event to the html element as
  *  an attribute  --- <input type="text" id="username" onblur="checkUsername()"/>
  * This method is not encouraged because we should separate the HTML and JS code .
  */
function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elName = document.getElementById('username');
    if (elName.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';
    }
    else{
        elMsg.textContent = " ";
    }
}

/**---- Traditional DOM  Event Handlers
 * All modern browsers understand this method of creating event handlers but you can only attach one function to each
 * event handler. The syntax is element.onevent = functionName; Note that there is no parenthesis to the function call.
 * This means you cannot pass parameters to the function call, although its possible.
 * In the example below,this keyword refers to the element the event happened on.
*/
function checkName(){
    var msg = document.getElementById('feedback');
    if(this.value.length < 5){
        msg.textContent = 'Username must be 5 characters or more';
    }
    else{
        msg.textContent = '';
    }
}

//var elInput = document.getElementById('username')
//elInput.onblur = checkName;


/**--------DOM Level 2 Event Listeners-----
 *   Event listeners are more modern approach and can deal with more than one fubction at a time although limited support in older browsers.
 *   The this keyword refers to the element on which this event occurs on.It is used where no parameters are passed to the 
 *   function so there is no use of an anonymous function.The event object is the preffered approach .
 */

function userCheck(){
    var textMsg = document.getElementById('feedback');
    if(this.value.length < 5){
        textMsg.textContent = 'Username must be 5 characters or more';
    }
    else{
        textMsg.textContent = '';
    }
}
var elIns = document.getElementById('username');
elIns.addEventListener('blur',userCheck,false); 

/**-----Using parameters with event listeners----
 * Anonymous functions provide a work around of working with parameters,you wrap the function call in an anonymous function.
 * The syntax is : 
 *    el.addEventListener('blur',function(){
 *       checkUsername(5);
 *       },false)
 */

var elUserName = document.getElementById('username');
var elMessg = document.getElementById('feedback');

function checkUserInput(minLength){
    if (elUserName.value.length < minLength){
        //Set the error message
        elMessg.textContent = 'Username must be ' +minLength+  ' characters or more';
    }
    else{
        elMessg.innerHTML = '';
    }
}
elUserName.addEventListener('blur',function(){
    checkUserInput(7);
},false);