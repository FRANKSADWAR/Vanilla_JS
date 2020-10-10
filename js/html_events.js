function setUp(){
    var textIn;
    textIn = document.getElementById('message');
    textIn.focus();
}

window.addEventListener("DOMContentLoaded",setUp,false);
window.addEventListener("beforeunload",function(event){
    return 'You have unsaved changes,save before exiting';
},false);