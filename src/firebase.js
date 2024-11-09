// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR6KMNJrlL18ZXqGn7CwK1da7ZoM3wg5o",
  authDomain: "netflix-clone-3467c.firebaseapp.com",
  projectId: "netflix-clone-3467c",
  storageBucket: "netflix-clone-3467c.firebasestorage.app",
  messagingSenderId: "37100421326",
  appId: "1:37100421326:web:8e0c647372a2c36b58509f",
  measurementId: "G-HS5DVLY07F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const signup = async (name, email, password) => {
try{
const res = await createUserWithEmailAndPassword(auth, email, password);
const user = res.user;

await addDoc(collection(db, "users"), {
uid: user.uid,
name,
authProvider: "local",
email,

})
} catch(err){
  console.log(err) 
  toast.error(error.code.split('/'){1}.split('-').join(" "))
}

}


const login = async (email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password);

  } catch(err){
    console.log(err)
    toast.error(error.code.split('/'){1}.split('-').join(" "))  }
}

const logout = () => {
  signOut(auth);
}


export {auth, db, login, signup, logout};