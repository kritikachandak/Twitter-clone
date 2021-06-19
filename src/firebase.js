import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDcV8g_69J9mx7OLCVS5_FtLfqfx72rXFY",
    authDomain: "twitter-clone-9d5fd.firebaseapp.com",
    projectId: "twitter-clone-9d5fd",
    storageBucket: "twitter-clone-9d5fd.appspot.com",
    messagingSenderId: "1007353331469",
    appId: "1:1007353331469:web:a1adf731b74efd9180ba44"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;