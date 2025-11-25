// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    push, 
    set, 
    onValue, 
    get, 
    child,
    update,
    query,
    orderByChild 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Web Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1opApr08e0Gbi-MMUUejvueVberqzGag",
    authDomain: "caremate-e1bd2.firebaseapp.com",
    databaseURL: "https://caremate-e1bd2-default-rtdb.firebaseio.com",
    projectId: "caremate-e1bd2",
    storageBucket: "caremate-e1bd2.firebasestorage.app",
    messagingSenderId: "593981693106",
    appId: "1:593981693106:web:5269808651564ed8e83dab",
    measurementId: "G-7JKQ35YPXV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Export database and auth functions
export { 
    database, 
    auth,
    ref, 
    push, 
    set, 
    onValue, 
    get, 
    child,
    update,
    query,
    orderByChild,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
};