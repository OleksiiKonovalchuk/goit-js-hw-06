const input = document.querySelector("[data-length]");
const dataLength = Number(input.dataset.length);

const onBlur = () => {
	if (input.value.length !== dataLength) {
		return input.classList.add("invalid");
	}
	if (input.value.length === dataLength) {
		input.classList.remove("invalid");
		return input.classList.add("valid");
	}
};

input.addEventListener("blur", onBlur);
