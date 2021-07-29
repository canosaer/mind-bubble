class VolunteerMenu{

    constructor(){

        this.setupListeners()
    }

    setupListeners = () => {
        let submitButton = document.querySelector('.volunteer__submit')

        submitButton.addEventListener('click', this.handleSubmitClick)
    }

    handleSubmitClick = (evt) => {
        evt.preventDefault()

        let programCheckboxes = document.querySelectorAll('.volunteer__checkbox')
        let nameInput = document.querySelector('.volunteer__input_name')
        let emailInput = document.querySelector('.volunteer__input_email')
        let backgroundRadios = document.querySelectorAll('.volunteer__radio')
        let errorEl = document.querySelector('.volunteer__error')
        let passed = true

        let backgroundResponse = false
        if(backgroundRadios[0].checked || backgroundRadios[1].checked) backgroundResponse = true

        let nameResponse = false
        if(nameInput.value) nameResponse = true

        let programResponse = false
        programCheckboxes.forEach(checkbox => {
            if(checkbox.checked) programResponse = true
        });

        let emailResponse = false
        if(emailInput.value) emailResponse = true
        
        console.log(`background: ${backgroundResponse} name: ${nameResponse} email: ${emailResponse} program: ${programResponse}`)

        //----
        if(backgroundResponse && nameResponse && programResponse && emailResponse){
            console.log('')
        }
        else{
            if(errorEl.classList.contains('invisible')) errorEl.classList.toggle('invisible')
            errorEl.textContent = 'Complete all fields to continue'
        }

        if(emailResponse){
            let emailRE = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w{2,}([-.]\w{2,})*$/
            if(!emailRE.test(emailInput.value)){
                console.log('yo')
                if(errorEl.classList.contains('invisible')) errorEl.classList.toggle('invisible')
                errorEl.textContent = 'Please enter a valid email address'
                passed = false
            }
        }

        
        
    }

}

new VolunteerMenu