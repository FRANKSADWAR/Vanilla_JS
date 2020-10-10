/** ------ Event Delegation --------
 * 
 * Creating event listener for a lot of elements can slow down a page,but event flow allows 
 * you to listen for an event on a parent element.
 * If users can interact with a lot of elements on a page such as UI buttons,long list or cells of a table,adding 
 * event listeners to each can use a lot of memory and slow down performance.
 * Because events affect containing elements due to event flow, you can use the event object's property to find which
 * of its children the event happened on.
 *   This has benefits for example: works with new elements since the event handlers are delegated to the ancestor.
 *   Simplifies the code.
 * The example below puts together these concepts,when a user clicks on the link,the item will be removed 
 * from the list. 
 * 
 */

function getTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e){
    // Remove the item from the list
    var target,elParent,elGrandParent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandParent = target.parentNode.parentNode;
    elGrandParent.removeChild(elParent);
    //document.removeChild(elGrandParent);

    // Prevent link from taking you elsewhere
    if(e.preventDefault()){
        e.preventDefault();
    }
    else{
        e.returnValue = false;
    }
}

// Set up the event listener to call the function itemDone() on click
var el = document.getElementById('shoppingList');
if(el.addEventListener){
    el.addEventListener('click',function(e){
        itemDone(e);
    },false);
}
else {
    el.attachEvent('onclick',function(e){
        itemDone(e);
    });
}
/**
 *    The this keyword refers to the element on which this event occurs on.It is used where no parameters are passed to the 
 *   function so there is no use of an anonymous function.The event object is the preffered approach .
 */



(function(){
  function getTarget(e){
    if(!e){
       e = window.event;
    }
    return e.target || e.srcElement;
  }

  function displayPanel(e){
      var sidePane = document.getElementById('sideslide');
      var target;
      target = getTarget(e);
      // if target has checkbox
      if(target.querySelector('input[type="checkbox"]')){
          sidePane.id = 'sidePanel';
      }
  }
  var elTable = document.getElementById('route_schedules');
  
  if(elTable.addEventListener){
      elTable.addEventListener('change',function(e){
          displayPanel(e);
      },false); 
  }
}());



function getDisplay(){
  var routeInfo = document.getElementById('sideslide');
  var checkBoxes = document.getElementById('tableBody').querySelectorAll('input[type="checkbox"]');
  for(var g = 0; g < checkBoxes.length;g ++){
      if(checkBoxes[g].checked){
        routeInfo.removeAttribute('id');
        routeInfo.className = 'sidepanel';
      }
   }
}
var elBody = document.getElementById('tableBody');
elBody.addEventListener("change",getDisplay,true);







