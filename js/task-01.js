const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

function showCategory(index)  {
  const category = categories[index];
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
}
showCategory(0);
showCategory(1)
showCategory(2)