const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function makeListItemMarkup(ingredients) {
  for (const ingredient of ingredients) {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = ingredient;
    
    ingredientsList.append(listItem);
  }
};

makeListItemMarkup(ingredients);