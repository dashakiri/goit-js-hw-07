'use strict'

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.querySelector('ul');

createListItem(ingredients);

function createListItem(array) {
  const newElement = array.map(element => {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    return listItem;
  });

  console.log(newElement)
   ulRef.append(...newElement);

  return;
}
