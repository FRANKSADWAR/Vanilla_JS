var colors;
colors = ['white','red','green','custom','lime'];
colors[3]='Beige'

var el =document.getElementById('changeColor');
el.textContent = colors[3];

console.log(colors);

/**
 * You can store different data types within an array.For example Boolean,number,string all in the same
 * array.
 * This method of creating an array is known as an array literal.
 * Another way of creating an array is by using the a different technique by using the array constructor.
 * Tis uses the new keyword followed by Array(); The method item() is then used to retrieve dta from the array,
 * with an idex number specified in the parentheses.
 * Avoid using constructors for defining javascript objects.
 * el is just an identifier and it refers to an element, a DOM element .
 */

var oldcolor;
oldcolor = ['Silk','Maroon','Brown','Orange'];
var el = document.getElementById('coloring');
el.innerHTML = oldcolor[3];

var itemThree
itemThree = colors[3];
console.log(itemThree);

var numColors;
numColors = colors.length;
console.log(numColors);

