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

// Moving Label On Focus
$inputs.forEach(input => {
  input.addEventListener('focus', e => {
    input.nextElementSibling.classList.add('form__label--moveup');
  });
});

// Error Class Toggle 
$controls.forEach(control => {
  if(!control.id) return
  const controlType = control.id.split('--')[1];
  q('input', control).addEventListener('keyup', e => {
    const val = e.target.value;
    const isValid = validationRules[controlType].every(rule => validator[rule](val))
    if(isValid){
      q('.form__label', control).classList.remove('form__label--error');
      q('.form__input', control).classList.remove('form__input--error');
      q('.form__error-message', control).classList.remove('form__error-message--show');
      validControls[controlType] = true
    }else {
      q('.form__label', control).classList.add('form__label--error');
      q('.form__input', control).classList.add('form__input--error');
      q('.form__error-message', control).classList.add('form__error-message--show');
      validControls[controlType] = false
    }
    toggleBtnDisable()
  });
});


const toggleBtnDisable = () => {
  const formValid = Object.keys(validControls).every(control => validControls[control]);
  if(formValid){
    q('.form__next').classList.remove('form__next--disabled');
  }else{
    q('.form__next').classList.add('form__next--disabled');
  }
}


