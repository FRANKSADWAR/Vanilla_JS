/**EVENTS EXAMPLE 
 * 
 * This example shows an interface for a user to record voice notes.The user can enter a name that is displayed in the
 * heading, and they can press record which changes the image being displayed.
 * A user starts typing a name into the textbox the keyup eveent will trigger a function called writeLabel() which copies 
 * the text from the  form input and writes it to the heading replacing 'AUDIO NOTE'.
 * The record/pause button has the  HTML5's data-state attribute which allow you to store custom data on an HTML element.
 * 
 * The event listener is placed upon the the containing element whose id is buttons.The event object is used to determine 
 * the value of the id attribute on the element that was used.The value from that id attribute is then used in switch 
 * statement to decide which function to call depending on whether the button is in record state or pause state. 
 * 
 * This is a good method of handling many buttons because it reduces the number of event listeners in the code.The event 
 * listeners are written at the end of code and have fallback functions for older browsers.
 * 
*/
var note,noteName,textEntered,target;
var  bTonns  = document.getElementById('buttons');
note = document.getElementById('note');
noteName = document.getElementById('noteName');     // Element that holds the note
function writeLabel(e){                             // Get event object for older browsers,get target of event,
    if(!e){                                         // update note text using value of that element. 
        e = window.event;                
    }
    target = e.target || e.srcElement;
    textEntered = e.target.value;
    noteName.textContent = textEntered;             
}

// This is where the record and pause controls and functions go..

if(document.addEventListener){                              // If event listener is supported
    bTonns.addEventListener('click',function(e){
        recorderControls(e);
    },false);

    // If input event fires on username input,call writeLabel()
    note.addEventListener('input',writeLabel,false);
}

else{
    bTonns.attachEvent('onclick',function(e){
        recorderControls(e);
    });
    
    // If keyup fires on username input call writeLabel()
    note.attachEvent('onkeyup',writeLabel,false);
}
window.addEventListener('DOMContentLoaded',setUp,false);
window.addEventListener('beforeunload',function(e){
    return 'You have unsaved changes,save before exiting...';
},false);

/**
 *  The recorderControls() function is automatically passed the event object.This offers support to older code as well as 
 *  preventing the default behaviour of taking user to a new page.
 *  The switch statement is used to indicate which function to run depending on whether the user is trying to record or stop
 *  the audio note. This technique is a good way of copying up with multiple buttons in the UI.
 * 
 *  */   

function recorderControls(e){
    if(!e){
        e = window.event;                      // Check for the presence of event object
    }
    target = e.target || e.srcElement;
    if(e.preventDefault){
        e.preventDefault();                   // prevent default behaviour of taking to another page
    }
    else{
        e.returnValue = false;
    }

    switch(target.getAttribute('data-state')){   // Get the data-state attribute
        case 'record':                           // If the value of the attribute is record, call the record function
            record(target); 
            break;
        case 'stop':                             // If the value of the attribute is stop ,call the stop function
            stop(target);
            break;    
    }
}



function record(target){
    target.setAttribute('data-state','stop');     // Set data-state attribute to stop
    target.textContent = 'Stop';                  // Set text to 'stop'
}

function stop(target){
    target.setAttribute('data-state','record');    //  Set  data-state attribute to record
    target.textContent = 'Record';                  // Set text to 'record' 
}

function setUp(){
    note.focus();
}