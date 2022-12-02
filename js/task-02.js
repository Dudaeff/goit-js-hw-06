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
  for (let i = 0; i < ingredients.length; i += 1){
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = ingredients[i];

    ingredientsList.append(listItem);
  }
} 

makeListItemMarkup(ingredients);
