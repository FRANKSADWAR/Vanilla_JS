var doc = '<p><b>page title : </b> ' + document.title + '<br />';
doc+= '<b>page address : </b>' + document.URL + '<br />';
doc+='<b>last modified: </b>' + document.lastModified + '</p>';

var elChange = document.getElementById('footer');
elChange.innerHTML = doc;

//innerHTML  can cause security risks if not used  correctly. pg 228