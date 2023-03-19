// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Added authentication SDK
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8VvTOBzo1XtGCwwV5a1naJP2BH3kMDWQ",
  authDomain: "connection-auth-abb8e.firebaseapp.com",
  projectId: "connection-auth-abb8e",
  storageBucket: "connection-auth-abb8e.appspot.com",
  messagingSenderId: "98638885731",
  appId: "1:98638885731:web:37dcb2fd8d92643f0d9956",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
