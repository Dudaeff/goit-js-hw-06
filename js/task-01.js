const categoriesListRef = document.querySelector('#categories');

function countCategories(list) {
    return `Number of categories: ${list.children.length}`
};
console.log(countCategories(categoriesListRef));

function getCategoryHeading(list) {
    for (const category of list.children) {
        console.log(`Category: ${category.firstElementChild.textContent} \nElements: ${category.lastElementChild.children.length}`);
    }
};
getCategoryHeading(categoriesListRef);
