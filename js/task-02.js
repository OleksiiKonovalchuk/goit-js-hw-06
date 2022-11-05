const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const placement = document.querySelector("#ingredients");

const array = [];
const newItems = ingredients.map(el => {
	const theElement = document.createElement("li");
	theElement.classList.add("item");
	theElement.textContent = `${el}`;
	return array.push(theElement);
});
placement.append(...array);
// const insertString = ingredients.map(ingredient => {
//   const string = `<li class="item">${ingredient}</li>`;
//   return string;
// }).join('');
// placement.insertAdjacentHTML("afterbegin", insertString)
// function element(el) {
//   const theElement = document.createElement("li");
//   theElement.classList.add('item')
//   theElement.textContent = el;
//   return theElement;
// }
