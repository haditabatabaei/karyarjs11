const form = document.forms[0];

const formValues = {
    firstName: '',
    cities: [],
    email: '',
    skills: [],
    gender: ''
}
let errors = [];
let firstNameErrors = [];
let fieldErrors = {
    firstName: [],
    email: []
} 
let fieldValidators = {
    firstName: (value) => value && value.length >= 3,
    email: (value) => value.includes('@')
}

let fields = {
    firstName: {
        validator: () => {},
        errors: [],
        value: ''
    },
    email: {
        validator: () => {},
        errors: [],
        //...
    }
}

// Correct Submit handling
function handleSubmit(event) {
    event.preventDefault();

    console.log({ formValues })

    const registerForm = event.target;

    formValues.skills = Array.from(registerForm.skills)
        .filter(({ checked }) => checked)
        .map(({ value }) => value )

    formValues.cities = Array.from(
        registerForm.city.selectedOptions
    ).map(({ value }) => value)

    formValues.email = registerForm.email.value;
    formValues.firstName = registerForm.firstName.value;
    formValues.gender = registerForm.gender.value;

    let isFormInvalid = false;

    validateForm() // errorFolan.push()

    if(firstNameErrors.length > 0) {
        isFormInvalid = false;
    }
    if(!formValues.email.includes('@')) {
        // email is not valid
        errors.push('Email is not valid.')
        isFormInvalid = true;
    }
    
    if(formValues.skills.includes('js') && formValues.skills.includes('ts')) {
        // skills is not valid
        errors.push('JS and TS cant be together!')
        isFormInvalid = true;
    }

    const errorListElem = document.getElementById('form-errors')
    
    if(isFormInvalid) {
        errorListElem.innerHTML = ''
        errors.forEach((error) => {
            const li = document.createElement('li');
            li.append(error)
            errorListElem.append(li)
        })
        return;
    }

    errorListElem.innerHTML = ''

    console.log('Submit Successful')
    // console.log(formValues)
}

form.addEventListener('submit', handleSubmit)

// input
// change

const firstNameInput = form.firstName;
const firstNameErrorElem = document.getElementById('firstNameError')
const emailInput = form.email
const cityInput = form.city;

function isFirstNameValid(value) {
    return value && value.length >= 3
}

// Higher Order Function - Closure
// inputName = 'email' | 'firstName' | ...
function getInputHandler(inputName) {
    return function handler(event) {
        const value = event.target.value

        formValues[inputName] = value;

        const validator = fieldValidators[inputName];
        const isValid = validator(value)
        let currentErrors = fieldErrors[inputName];

        if(!isValid && currentErrors.length === 0) {
            currentErrors.push(inputName + ' is not valid')
        } else if (isValid) {
            fieldErrors[inputName] = []
        }

        console.log({ formValues, fieldErrors })  
    }
}

firstNameInput.addEventListener('input', getInputHandler('firstName'))
emailInput.addEventListener('input', getInputHandler('email'))


function handleCityChange(event) {
    formValues.cities = Array.from(
        event.target.selectedOptions
    ).map(({ value }) => value)

    console.log({ cities: formValues.cities })
}



cityInput.addEventListener('change', handleCityChange)

// form.addEventListener('reset')

// const buttonElem = document.getElementById('submit-button')

// WRONG: buttonElem.addEventListener('click', () => {
//     // Submit Funcionality
// })

// /* Also Correct in some conditions */ buttonElem.addEventListener('click', () => {
//     form.dispatchEvent('submit')
// })

// function handleGoogleTagClick(event) {
//     console.log('Google tag clicked!')
// }

// document.querySelector('#google').addEventListener('click', handleGoogleTagClick)