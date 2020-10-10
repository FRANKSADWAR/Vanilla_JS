var msg = '<h2>browser window </h2><p>Width : </p>' + window.innerWidth + '</p';
msg += '<p> Height :'+ window.innerHeight + '</p>';
msg+='<h2>History :</h2><p> Items :' + window.history.length + '</p>';
msg += '<h2>Screen :</h2><p> Width :'+ window.screen.width+ '</p>';
msg+= '<p> Height : ' + window.screen.height + '</p>';

var el = document.getElementById('window_object');
el.innerHTML = msg;

alert('Current Page' + window.location);