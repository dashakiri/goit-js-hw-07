'use strict'

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.
const ulRef = document.querySelector('ul#categories');
const liRef = document.querySelectorAll('li.item');

const getCategoriesLength = () => {
    const arrayOfCategories = ulRef.children;
    console.log(`В списке ${arrayOfCategories.length} категории.`);
};
getCategoriesLength();

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
// элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const getCategoryTitle = (array) => {

    array.forEach(element => {
        const oneElementList = element.firstElementChild;
        console.log(`Категория: ${oneElementList.textContent}`)

        const ulInsideOfAnElement = element.lastElementChild;
        const arrayOfItemsInUl = ulInsideOfAnElement.children;
        console.log(`Категория: ${arrayOfItemsInUl.length}`);
    });

};

getCategoryTitle(liRef);
