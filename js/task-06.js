'use strict'

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на
// правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если
// неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('#validation-input');
const dataLengthAttribute = inputRef.getAttribute('data-length');

inputRef.addEventListener('input', () => console.log('this is input'));

inputRef.addEventListener('blur', e => {
    const value = e.currentTarget.value;
    
    if (value.length !== Number(dataLengthAttribute)) {
        e.currentTarget.classList.add('invalid');
    } else {
        if (e.currentTarget.classList.contains('invalid')) {
        e.currentTarget.classList.replace('invalid', 'valid');
    }};
});




