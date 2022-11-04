const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
}
const outputFn = () => {
  if (refs.input.value === '') {
    return refs.output.textContent = "Anonymous";
  } return refs.output.textContent = refs.input.value.trim();
 
}
refs.input.addEventListener("input", outputFn);