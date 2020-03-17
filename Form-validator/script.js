const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error
function showError(input, msg) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = msg;
}
// Show input success
function showSuccess(input, msg) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	const small = formControl.querySelector('small');
	small.innerText = msg;
}

// Check if email is Valid
function checkEmail(input) {
	const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not Valid');
	}
}
// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, "Passwords don't match");
	}
}
// Get field Name
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Check for required fields
function checkRequired(inputArr) {
	inputArr.forEach((input) => {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} can only be ${max} characters`);
	} else {
		showSuccess(input);
	}
}

// Eventlistners
form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([
		username,
		email,
		password,
		password2
	]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, password2);
});
