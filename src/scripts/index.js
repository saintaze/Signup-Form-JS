import validator from  './validator';
import { q, qA } from './helpers';

import '../styles/index.scss';


// Grabbing Elements from DOM
const $controls = qA('.form__control');
const $inputs = qA('input');


// Controls Validation Rules
const validationRules = {
  name: ['isNotEmpty'],
  email: ['isNotEmpty', 'isEmail'],
  password: ['isNotEmpty', 'isGreaterThan']
}


//  Controls Valid State
const controlsAreValid = {
  name: false,
  email: false,
  password: false
}


// Move Label Up On Focus
$inputs.forEach(input => {
  input.addEventListener('focus', e => {
    input.nextElementSibling.classList.add('form__label--moveup');
  });
});


// Helper To Get Control Type/Name
const getControlType = control => control.id.split('--')[1];


// Handle Form Submit
q('.form').addEventListener('submit', e => {
  e.preventDefault();
  // Run Some Login With JS 
})


// Add Error On Touch
$controls.forEach(control => {
  if (!control.id) return;
  q('input', control).addEventListener('blur', ({ target: { value } }) => {
    if (!validator.isNotEmpty(value)) toggleErrorClass(control, 'add');
  });
});


// Toggle Error On Type 
$controls.forEach(control => {
  if(!control.id) return;
  const controlType = getControlType(control);
  q('input', control).addEventListener('keyup', ({ target: { value } }) => {
    const isValid = validationRules[controlType].every(rule => validator[rule](value));
    let toggle = isValid ? 'remove' : 'add';
    controlsAreValid[controlType] = toggle === 'remove' ? true: false; 
    toggleErrorClass(control, toggle); 
    toggleBtnDisable();
  });
});


// Toggle Error Classes
const toggleErrorClass = (control, toggle) => {
  q('.form__label', control).classList[toggle]('form__label--error');
  q('.form__input', control).classList[toggle]('form__input--error');
  q('.form__error-message', control).classList[toggle]('form__error-message--show');
  const controlType = getControlType(control);
  if (controlType === 'password') togglePasswordHelp(control);
}


// Toggle Password Help
const togglePasswordHelp = control => {
  const errorMessageShow = !!q('.form__error-message--show', control);
  const show = errorMessageShow ? 'none' : 'block';
  q('.form__help', control).style.display = show;
}


// Toggle Next Button Disabled
const toggleBtnDisable = () => {
  const formIsValid = Object.keys(controlsAreValid).every(control => controlsAreValid[control]);
  let toggle = formIsValid ? 'remove'  : 'add';
  q('.form__next').classList[toggle]('form__next--disabled');
}




