const refs = {
	input: document.querySelector("#font-size-control"),
	span: document.querySelector("#text"),
};

const onInput = () => {
	return (refs.span.style.fontSize = `${refs.input.value}px`);
};
refs.input.addEventListener("input", onInput);
