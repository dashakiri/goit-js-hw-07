'use strict'

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener('click', () => value.innerHTML = counterValue += 1);

decrementBtn.addEventListener('click', () => {
    if (value.innerHTML > 0) {
        value.innerHTML = counterValue -= 1;
    }; 
});







