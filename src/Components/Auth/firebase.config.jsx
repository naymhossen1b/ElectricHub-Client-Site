// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_BIfJz6u5Xe_6momZE_Qemrq-HfDoHss",
  authDomain: "naym-elctronic-hub.firebaseapp.com",
  projectId: "naym-elctronic-hub",
  storageBucket: "naym-elctronic-hub.appspot.com",
  messagingSenderId: "340190830147",
  appId: "1:340190830147:web:b7e36abeb92e058eb43ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;