const form = document.querySelector(".login-form");
function onSubmit(e) {
	e.preventDefault();
	const {
		elements: { email, password },
	} = form;
	if (email.value === "" && password.value === "") {
		return alert("Заповніть будь ласка усі поля!");
	}
	const formData = {
		email: email.value,
		password: password.value,
	};
	console.log(formData);
	return form.reset();
}
form.addEventListener("submit", onSubmit);
