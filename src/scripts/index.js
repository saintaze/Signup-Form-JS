import validator from  './validator';
import { q, qA } from './helpers';

import '../styles/index.scss';

const $controls = qA('.form__control');
const $inputs = qA('input');

const validationRules = {
  name: ['isNotEmpty'],
  email: ['isNotEmpty', 'isEmail'],
  password: ['isNotEmpty', 'isGreaterThan']
}

const validControls = {
  name: false,
  email: false,
  password: false
}

// Move Label On Focus
$inputs.forEach(input => {
  input.addEventListener('focus', e => {
    input.nextElementSibling.classList.add('form__label--moveup');
  });
});


// Add Error On Touched
$controls.forEach(control => {
  if (!control.id) return;
  q('input', control).addEventListener('blur', ({ target: { value } }) => {
    let toggle = !validator.isNotEmpty(value) ? 'add' : 'remove';
    toggleErrorClass(control, toggle);
  });
});


// Toggle Error On Type 
$controls.forEach(control => {
  if(!control.id) return;
  const controlType = control.id.split('--')[1];
  q('input', control).addEventListener('keyup', ({ target: { value } }) => {
    const isValid = validationRules[controlType].every(rule => validator[rule](value));
    let toggle = isValid ? 'remove' : 'add';
    validControls[controlType] = toggle === 'remove' ? true: false; 
    toggleErrorClass(control, toggle); 
    toggleBtnDisable();
  });
});


// Toggle Error Class
const toggleErrorClass = (control, toggle) => {
  q('.form__label', control).classList[toggle]('form__label--error');
  q('.form__input', control).classList[toggle]('form__input--error');
  q('.form__error-message', control).classList[toggle]('form__error-message--show');
}


// Toggle Next Button Disabled
const toggleBtnDisable = () => {
  const formValid = Object.keys(validControls).every(control => validControls[control]);
  let toggle = formValid ? 'remove'  : 'add';
  q('.form__next').classList[toggle]('form__next--disabled');
}


