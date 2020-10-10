var price = 5;
var qty = 15;
var total = price * qty;

var elCost = document.getElementById('cost')
elCost.textContent='$' + total;

/**
 * A variable is used to hold a reference to an  element in the HTML page.
 * This allows you to work directly with the element stored in that variable.
 */
// Until you have assigned a value to a variable,the value is undefined.

// `${total}`