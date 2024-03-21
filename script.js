function getFormvalue() {
	//element selector
	// let nameInput = document.querySelectorAll("input")

	//attribute selctor
	let fnameInput = document.querySelector('[name="fname"]')
	let lnameInput = document.querySelector('[name="lname"]')
	let userName = fnameInput.value+" "+lnameInput.value
	alert(userName)
}
