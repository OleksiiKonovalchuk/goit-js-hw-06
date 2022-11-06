const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

// function showCategory(index) {
// 	const category = categories[index];
// 	console.log(`Category: ${category.firstElementChild.textContent}`);
// 	console.log(`Elements: ${category.lastElementChild.children.length}`);
// }
// showCategory(0);
// showCategory(1);
// showCategory(2);

const showCategory2 = array => {
	for (const item of array) {
		console.log(`Category: ${item.firstElementChild.textContent}`);
		console.log(`Elements: ${item.lastElementChild.children.length}`);
	}
};

showCategory2(categories);
