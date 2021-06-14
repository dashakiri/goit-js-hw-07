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

function createListItem(array) {
  array.map(element => {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    ulRef.appendChild(listItem);
  }).join('');

  return;
}

createListItem(ingredients);

// const createListItem = (array) => {
//   array.forEach(element => {
//     const listItem = document.createElement('li');
//     listItem.textContent = element;
//     ulRef.appendChild(listItem);
//   });
//   return;
// };

// createListItem(ingredients);
