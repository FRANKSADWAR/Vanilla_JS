/**  Events flow in two directions :
 *     ---- Event bubbling ; the event starts at the most specific node and flows outwards to the least 
 *                          specific one.
 *     ---- Event capturing ; the event starts at the least specific node and flows inwards to the most specific one.
 *                            Not supported in IE5-8.
 *                            
 *   The flow of events matters when your code has event handlers on an element and one of its ancestors or
 *   descendants. Value of false shows the events should be followed in a bubbling phase.
 * When an event occurs the event object tells you information about the event and the element it happened upon.
 * When the event object is passed into a function it is often given the parameter name e (for event).
 * 
 * Event Listeners with no parameters:
 *    
 *     function checkName(e){
 *        var target = e.target;  // get the target of the event,the specific element the event occurs on
 *       ........do things here  using the target
 *     }
 *     var el = document.getElementById('username');
 *     el.addEventListener('blur',checkName,false); 
 * 
 * 
 * Event  Listeners with parameters :
 *   
 *    function checkName(e,minLen){
 *        var target = e.target;
 *        ......do something here with target
 *     }
 *     var el = document.getElementById('username');
 *     el.addEventListener('blur',function(e){
 *          checkName(e,7);
 *        },false); 
 * 
 * 
 * The event object is not recognized in IE5-8 , so you must modify the code.The event object is a child of the window object in 
 * those older browsers.The code below is modified to accomodate older browsers like IE5-8,the code uses a logical not operator to check
 * for the presence of the event object.
 * Some of the properties are actually depricated,meaning we should write code to accomodate modern browsers.
 * We will write the code below to support purely newer browsers in event_object_two.js
 * 
 */


// FUNCTION TO BE TRIGGERED WHEN THE EVENT OCCURS 
function checkLength(e,minLen){
    var el,elMsg;
    if(!e){
        e = window.event;              // This get the event object in older browsers.Its  depricated.
    }
    el = e.target || e.srcElement;
    elMsg = document.getElementById('feedback');         // The message will be written on the next sibling element after the  username input.
    if(el.value.length < minLen){
        elMsg.innerHTML  = 'Username must have ' +minLen+ 'characters or more';
    }
    else {
        elMsg.innerHTML = '';
    }
}

// ATTACHING THE FUNCTION TO ACT UPON THE EVENT
var elName = document.getElementById('username');
if(elName.addEventListener){
    elName.addEventListener('blur',function(e){
        checkLength(e,7);
    },false);
}
else {
    elName.attachEvent('onblur',function(e){
        checkLength(e,7);
    });
}