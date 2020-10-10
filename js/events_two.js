/**-----Using parameters with event listeners----
 * Anonymous functions provide a work around of working with parameters,you wrap the function call in an anonymous function.
 * The syntax is : 
 *    el.addEventListener('blur',function(){
 *       checkUsername(5);
 *       },false)
 * The this keyword refers the element on which this event occurs on.
 */

var elUserName = document.getElementById('username');
var elMessg = document.getElementById('feedback');

function checkUserInput(minLength){
    if (elUserName.value.length < minLength) {
        //Set the error message
        elMessg.textContent = 'Username must be ' +minLength+  ' characters or more';
    }
    else {
        elMessg.innerHTML = '';
    }
}
elUserName.addEventListener('blur',function(){
    checkUserInput(7);
},false);


/**Older browsers IE5-8 do not support the addEventListener() method so you need to provide a fallback function that uses
 * the attchEvent() method that older versions of IE8 understands.Note that the event is preceded by the word 'on' as before.
 */
var elUser = document.getElementById('username');
var elMsg = document.getElementById('feedback');
function checkUser(minLength){
    if(elUser.value.length < minLength){
        elMsg.textContent = 'Username must contain ' +minLength+ 'characters or more';
    }
    else{
        elMsg.innerHTML = '';
    }
}

if(elUser.addEventListener){
    elUser.addEventListener('blur',function(){
        checkUser(7);
    },false);
}
else {
    elUser.attachEvent('onblur',function(){
        checkUser(7);
    });
}