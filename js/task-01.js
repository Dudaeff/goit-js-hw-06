const categoriesList = document.querySelector('#categories');

function countCategories(list) {
    return `Number of categories: ${[...list.children].length}`
}
console.log(countCategories(categoriesList));

function getCategoryHeading(list) {
      for (const category of [...list.children]) {
          console.log(`Category: ${category.firstElementChild.textContent}`);
          console.log(`Elements: ${category.lastElementChild.children.length}`);
    }
}
getCategoryHeading(categoriesList)
