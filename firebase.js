// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js'

// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyCrgAY7laKqetqJjO8OQ_XqBmUvCGkRXhw",
//   authDomain: "signin-8bf08.firebaseapp.com",
//   projectId: "signin-8bf08",
//   storageBucket: "signin-8bf08.appspot.com",
//   messagingSenderId: "693078137780",
//   appId: "1:693078137780:web:5a822fd85a2f5bcf27b0e1"
// };


// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export{
// 	auth,
// 	createUserWithEmailAndPassword
// };



import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js'
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js'



const firebaseConfig = {
  apiKey: "AIzaSyDENywMN3FWZOFrSOAIHvB5faAa1fXb0WM",
  authDomain: "login-1826f.firebaseapp.com",
  projectId: "login-1826f",
  storageBucket: "login-1826f.appspot.com",
  messagingSenderId: "489997823088",
  appId: "1:489997823088:web:3d83fe76cc7c32a692d8b5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
}










