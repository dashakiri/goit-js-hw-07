'use strict'

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане
// должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameOutputSpan = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);

nameInput.addEventListener('blur', onInputBlur);

function onInputChange(event) {
    nameOutputSpan.textContent = event.currentTarget.value;      
}

function onInputBlur() {
if (nameOutputSpan.textContent === '') {
       nameOutputSpan.textContent = 'незнакомец';     
    }
}