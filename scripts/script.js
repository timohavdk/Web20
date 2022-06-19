var checker = document.querySelector(".intro_check");
var enter = document.querySelector('[type="submit"]');
const form = document.querySelector(".intro_form");
const formFields = form.elements;

enter.addEventListener("click", function(){
    if (checker.value == True){
        for(let i = 0; i < formFields.length; i++){
            if (formFields[i].type != 'checkbox' && formFields[i].type != 'submit'){
                localStorage.setItem(formFields[i].name, formFields[i].value);
            }
        }
    }
});

