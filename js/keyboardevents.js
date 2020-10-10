var el;
function charCount(e){
    var textEnter,charDisp,counter,lastKey;
    textEnter = document.getElementById('message').value;          // Get user's text
    charDisp = document.getElementById('charLeft');                // Counter display
    counter = (180 - (textEnter.length));                          // The characters left
    charDisp.textContent = counter;                                // Add the text left to the counter display

    lastKey = document.getElementById('lastkey');                   // Displays the last key used
    lastKey.textContent = 'Last Key  in ASCII Code' + e.keyCode;    // Create message using event object
}

el = document.getElementById('message');
el.addEventListener('keypress',charCount,false);