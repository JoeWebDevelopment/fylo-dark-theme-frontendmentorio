const errorMessage = document.querySelector('#email-error') 
const form = document.querySelector('form')
let emailInput = document.querySelector('#email')


    form.addEventListener('submit', (event)=>{
       
        event.preventDefault()
        console.log(emailInput.checkValidity())

        if(emailInput.checkValidity() === false){
            errorMessage.textContent = "Error, please check your email"
            errorMessage.classList.remove('hidden')
            emailInput.setAttribute('aria-invalid', 'true')
        }else{
            errorMessage.textContent = "Email submitted. Thank you!"
            errorMessage.classList.remove('hidden');
            errorMessage.style.color ="green"
            emailInput.setAttribute('aria-invalid', 'false')
        }

    })


