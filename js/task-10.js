function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const refs = {
	input: document.querySelector("input"),
	create: document.querySelector("[data-create]"),
	destroy: document.querySelector("[data-destroy]"),
	boxes: document.querySelector("#boxes"),
};

const basePx = 30;
let array = [];

const createBoxes = amount => {
	array = [];
	if (amount === 0) {
		return;
	} else {
		for (let i = 0; i < amount; i += 1) {
			const box = document.createElement("div");
			box.style.height = `${basePx + i * 10}px`;
			box.style.width = `${basePx + i * 10}px`;
			box.style.backgroundColor = `${getRandomHexColor()}`;
			array.push(box);
		}
	}
};

const create = () => {
	createBoxes(Number(refs.input.value));
	return refs.boxes.append(...array);
};

const destroyBoxes = () => {
	return (refs.boxes.innerHTML = "");
};

refs.create.addEventListener("click", create);
refs.destroy.addEventListener("click", destroyBoxes);
