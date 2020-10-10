 // Create the HTML for the message
var msg = '<div id =\"closeLink\"><a id = \"close\" href ="#">X</a></div>';
msg+= '<div id=\"sysinfo\"><h2>System Maintenance</h2>';
msg+= 'Our server are being updated between 3 and 4 a.m ';
msg+= 'During this time,there may be minor disruptions to service.</div>';


var elBody = document.querySelector('body');
var newDiv = document.createElement('div');
newDiv.setAttribute('id','note');
newDiv.innerHTML=msg;
elBody.appendChild(newDiv);

function closeNote(){
    elBody.removeChild(newDiv);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click',closeNote,false);



