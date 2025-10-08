// evento di submit sul tag form //
const form = document.getElementById('form-principale')
 // EVENT LISTENER DI SUBMIT // 
form.addEventListener('submit', function (e) {
    e.preventDefault()

    console.log('FORM INVIATO', e)
    
    // IDENTIFICARE I CAMPI INPUT DEL FORM //
    const firstnameInput = document.getElementById('firstname') 
  const lastnameInput = document.getElementById('lastname') 
  const ageInput = document.getElementById('age')
  const emailInput = document.getElementById('email')

  const inputs = [firstnameInput, lastnameInput,ageInput, emailInput]
  inputs.forEach(input =>{ if (input.value.trim() !== '') {
    input.classList.add('completed')
  } else  {input.classList.remove('completed')}

  })



})
