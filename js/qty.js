var price;
var quantity;
var total;

price=5;
quantity=14;
total=price * quantity;

var el =document.getElementById('cost');
el.textContent = '$' + total;
//The textContent replaces the content that was initially in the page.