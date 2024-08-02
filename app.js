// import { auth,createUserWithEmailAndPassword } from "./firebase.js";

// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const checkbox = document.getElementById("checkbox");



// const register = () =>{
// 	createUserWithEmailAndPassword(auth, email.value, password.value)
// 	.then((userCredential) => {
// 	  const user = userCredential.user;
// 	  console.log("User=>" ,user)

// 	})
// 	.catch((error) => {
// 	  const errorCode = error.code;
// 	  const errorMessage = error.message;
// 	  console.log("error",error)

// 	});
// }



// const registerBtn = document.getElementById('registerBtn');
// registerBtn.addEventListener("click",register)
import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", () => {
	if (checkbox.checked) {
		password.setAttribute("type", "text");
	} else {
		password.setAttribute("type", "password")
	}
})


const register = () => {

	if (!email.value && !password.value) {
		Swal.fire("Please fill the required fields!");
		return;

	}
	if (!email.value) {
		Swal.fire("Please enter the email!");
		return;

	}
	if (!password.value) {
		Swal.fire("Please enter the password!")
		return;
	}

	createUserWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {

			const user = userCredential.user;
			console.log("User", user);
			Swal.fire("Registration successful!", "", "success");

		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log("errorCode", errorCode);
			console.log("ErrorMessage", errorMessage)
			console.log("Error", error)




			if (errorCode == "auth/email-already-in-use") {
				Swal.fire({
					icon: "error",
					title: 'You are already registered',
					text: errorCode,
					confirmButtonText: 'Ok',
					confirmButtonColor: '#3085d6'
				}).then((result)=>{
					if(result.isConfirmed){
						document.location.href = "login.html"
					}

				})
			}

			else if (errorCode.includes('auth/')) {

				Swal.fire({
					title: 'Error',
					text: errorMessage,
					icon: 'error',
				});
			} else if (errorCode === 'auth/network-request-failed') {
				Swal.fire({
					title: 'Network Error',
					text: 'Please check your internet connection and try again.',
					icon: 'error',
				});
			}




		});
	email.value = '';
	password.value = '';




}


//auth/email-already-in-use

const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", register)



// const registerLogin = ()=>{
// 	console.log("Hello");
// }


// const loginregisterBtn = document.getElementById("loginregisterBtn");
// loginregisterBtn.addEventListener("click",registerLogin)


console.log(document.getElementById("loginregisterBtn"))











