var elMsg = document.getElementById('info');
var el = document.getElementById('names');
var target;

function getTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function checkUsername(e){
    target = getTarget(e);
    if(target.value.length  < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet ......';
    }
    else {
        elMsg.textContent = '';
    }
}

function tipUsername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be 5 characters or more';

}

if(el.addEventListener){
    el.addEventListener('focus',tipUsername,false);
    el.addEventListener('blur',checkUsername,false);
}
else{
    el.attachEvent('onfocus',tipUsername);
    el.attachEvent('onblur',checkUsername);
}

