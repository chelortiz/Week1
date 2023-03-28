
function revision() {

	let name = document.getElementById("form-name").value;
	let last = document.getElementById("form-last").value;
	let email = document.getElementById("form-email").value;
	let password = document.getElementById("form-pass").value;
	let confirm = document.getElementById("form-confirm").value;
	let phone = document.getElementById("form-phone").value;
	let age = document.getElementById("form-age").value;
	let website = document.getElementById("form-website").value;
	let exp = document.getElementById("form-exp").value;
	let text = "";
	/*let info = [name, last, email, password, confirm, phone, age, website, exp];*/

	if ( !isNaN(name) || name == "" || name.indexOf(" ") == 0 ){
		text +="Error: debe ingresar nombre válido";
	}else {
		console.log(name);
	}

	if ( !isNaN(last) || last == "" || last.indexOf(" ") ==0 ){
		text +="Error: debe ingresar apellido válido";
	}else {
		console.log(last);
	}


	if (email.includes('@') == false || email.includes('.com') == false){
		text += "Error: ingresar formato de correo válido";
	}else {
		console.log(email);
	}


	if (password.length < 5){
		text += "Error: Debe tener mas de 5 letras";
	}else {
		console.log(password);
	}

		
	if (password != confirm) {
		text += "Error: Clave debe coincidir";
	}else {
		console.log(confirm);
	}

		
	if (isNaN(phone) || phone.length < 8) {
		text += "Error: ingresar numero válido";
	}else {
		console.log(phone);
	}


	if (age >= 100 || age == "" || age <= 0) {
		text += "Error: Ingresar edad válida";
	}else {
		console.log(age);
	}


	if (website.includes('http://www.') == false || website.includes('.com') == false){
		text += "Error: ingresar formato válido";
	}else {
		console.log(website);
	}


	if (text != ""){
		alert (text);
		return false;
	}else {
		return true;
	}
	
}

