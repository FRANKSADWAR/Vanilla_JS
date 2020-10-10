var today = new Date();
var this_year = today.getFullYear();

var elDate = document.getElementById('copy');
elDate.innerHTML = '<p>IldingoLeads &copy;' + this_year+'</p>';

//var est = new Date(1997,12,11,13,18,10);
var est = new Date('Dec 11,1997 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('est_msg');
elMsg.textContent = Math.floor(difference) + 'Years Of GIS Technology and Mapping';