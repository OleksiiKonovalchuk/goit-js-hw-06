const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
}
let counterValue = 0;

const decrement = () => {
  counterValue = Number(refs.value.textContent) - 1;
  return refs.value.textContent = counterValue;
}

const increment = () => {
  counterValue = Number(refs.value.textContent) + 1;
  return refs.value.textContent = counterValue;
}

refs.decrement.addEventListener("click", decrement);
refs.increment.addEventListener("click", increment);

