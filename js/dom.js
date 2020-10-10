/**
 * This example brings together the techniques used in DOM queries,manipulation,traversing.
 * It has three main parts:
 *  1. Adding a new item to the start and the end of the list
 *  2. Set class attribute on all items.This involves looping through the li elements and updating the value of the class attribute
 *  3. Add the number of list items to the heading.This involves :
 *     -- Reading the content of the heading
 *     -- Counting the number of li elements in the page
 *     -- Adding the number of items to the content of the heading
 *     -- Updating the heading with this new content
 * 
 * 
 *  The first part of the code adds new list items to the ul element.This is done with DOM manipulation
 *  techniques in four steps:
 *      use createElement() to create a new element
 *      create the text node using createTextNode()
 *      add the text node to the created element using appendChild()
 *      add the new element to the DOM tree using appendChild()
 *  The appendChild() method adds a child element to the parent , it will be added to the last -----> parent.appendChild(newItem);
 *  The insertBefore() method is used to add an element at the start of the parent element.This requires the item to be added and 
 *  the target where this will be added before it: parent.insertBefore(newItem,target);
 */



 // ADDING  list items at the start and end of the list
var list = document.getElementById('items');              // Get the ul element by Id 

// Add new item to end of list
var lastItem = document.createElement('li');               // create an element
var lastItemText = document.createTextNode('cream');       // create text node
lastItem.appendChild(lastItemText);                        // add text to the new element
list.appendChild(lastItem);                                // add the new item to the end of list

// ADD New Item to the start of the list
var firstItem = document.createElement('li');              
var firstItemText  = document.createTextNode('Kale');     
firstItem.appendChild(firstItemText);                  
list.insertBefore(firstItem,list.firstChild);              // add the new list item to the start of the list

var listItems = document.querySelectorAll('li');

// ADD A class of cool to all list items
var i;
for(i=0; i < listItems.length; i++){                       // Loop through to change class to cool
    listItems[i].className = 'cool';  
}

// ADD number of items in the list to the heading
var head = document.querySelector('h1');                      // Get the h1 element
var headText = head.firstChild.nodeValue;                     // Get the h1 text
totalItems = listItems.length;                                // Get the total list items
var newHead = headText + '<span>' + totalItems + '</span>';   // create the new h1 content
head.innerHTML = newHead;                                     // Update the h1 text



