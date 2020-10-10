var elForm,elSelect,elPHint,elTerms,elTermsHint,target;
elForm = document.getElementById('formUp');
elSelect = document.getElementById('package');
elPHint = document.getElementById('elHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint(e){
    target = e.target;
    var pack = target.options[target.selectedIndex].value; // get the selected index,then get its value
    switch(pack){
        case 'monthly':
            elPHint.innerHTML = 'Save $10 paying for 1 year';
            break;
        case 'yearly':
            elPHint.innerHTML = 'Good package choice';
            break;    
        case 'half_year':
            elPHint.innerHTML = 'Half year package';
            break;    
        default:
            elPHint.innerHTML = 'Wise Choice !';
            break;    
    }
    /**
     * if(pack == 'monthly') {
        elPHint.innerHTML = 'Save $10 if you pay for 1 Year!';
    }
    else {
        elPHint.innerHTML = 'Wise choice !';
    }
     */
}

function checkTerms(e){
    if(!elTerms.checked){
        elTermsHint.innerHTML = 'You must agree to the terms and conditions...!'
        e.preventDefault();   // prevent form being submitted
    }
    else {
        elTermsHint.innerHTML = ' ';
        
    }
}

// Create the event listeners: submit calls checkTerms() , change calls packageHint()
elSelect.addEventListener('change',packageHint,false);
elForm.addEventListener('submit',checkTerms,false);


