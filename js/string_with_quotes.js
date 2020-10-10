var title;
var message;
title=" Molly's Special Offers";  // to add inner single quotes,use outer double quotes
message = '<a href=\"sale.html\">25% Off</a>';   // to add inner double quotes,use outer single quotes,
/*
The backslash tells the string that the character is part of the string.
This code uses the property known as innerHTML to add content
*/

var elTitle = document.getElementById('title');
elTitle.innerHTML=title;
var elNote = document.getElementById('notes');
elNote.innerHTML=message;
