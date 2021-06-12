'use strict'

// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии
// на кнопку Очистить, коллекция элементов очищается.



const controlsDivRef = document.querySelector('#controls');
const boxesDivRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

  
function createBoxes() {
    const inputValue = inputRef.value;

    const boxes = [];

    for (let i = 0; i < inputValue; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = makeRandomColor();
        div.style.width = (i * 10) + 30 + 'px';
        div.style.height = (i * 10) + 30 + 'px';
        div.style.marginTop = '2px';
        boxes.push(div);
    };

    boxesDivRef.append(...boxes);

};

function makeRandomColor() {
    const random = (min, max) => Math.round(Math.random() * (max - min) + min);
    const red = random(0, 255);
    const green = random(0, 255);
    const blue = random(0, 255);
    return `rgb(${red},${green},${blue})`;
};

function destroyBoxes() {
    if (boxesDivRef.children.length > 0) {
        boxesDivRef.innerHTML = '';
    };
};


