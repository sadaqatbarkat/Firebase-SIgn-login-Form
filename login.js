import { auth ,signInWithEmailAndPassword,signOut } from "./firebase.js";
const email = document.getElementById("loginemail");
const password = document.getElementById("loginpassword");


const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click",()=>{
	if(checkbox.checked){
		password.setAttribute("type","text");
	}else{
		password.setAttribute("type","password")
	}
})


let loginRegister = ()=>{


	if(!email.value && !password.value){
		Swal.fire("Please fill the required fields!");
		return;

	}


	if(!email.value){
		Swal.fire("Please enter the email!");
		return;
	
	}
	if(!password.value){
		Swal.fire("Please enter the password!")
		return;
	}


	signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
   console.log("User",user)
   Swal.fire({
	icon: 'success',
	title: 'Login Successful',
	text: 'Do You want to  logged Out.',
	confirmButtonText: 'Logged Out',
	confirmButtonColor: '#3085d6',
	showCancelButton: true,
	cancelButtonText: 'Stay Here',
  }).then((result) => {
	if (result.isConfirmed) {
		signOut(auth).then(() => {
			Swal.fire({
				position: "top-center",
				icon: "success",
				title: "Sign-out successful",
				showConfirmButton: false,
				timer: 1500
			  });

setTimeout (function(){
document.location.href = "index.html"
},1501)
		
			
		  }).catch((error) => {
			
		  });
	}
  });

  email.value = ''
  password.value = ''
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
	Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: errorMessage,
        confirmButtonText: 'OK'
      });
    
  });
  
	
}


const loginregisterBtn = document.getElementById("loginregisterBtn");
loginregisterBtn.addEventListener("click",loginRegister)