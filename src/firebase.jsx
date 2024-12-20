// import firebaseApp from './firebaseApp';
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import "firebase/compat/storage";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//     apiKey: "AIzaSyAxtqsFH3dJrgjJdD_sy_Ot7_Q_4aD0yco",
//     authDomain: "disneyplus-clone-ffe38.firebaseapp.com",
//     projectId: "disneyplus-clone-ffe38",
//     storageBucket: "disneyplus-clone-ffe38.firebasestorage.app",
//     messagingSenderId: "938256973813",
//     appId: "1:938256973813:web:c9f372a3b76b0e2a31eabc",
//     measurementId: "G-FTMC7HHRWK"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const database = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const storage = firebase.storage();

//   export { auth, provider, storage }
//   export default database
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxtqsFH3dJrgjJdD_sy_Ot7_Q_4aD0yco",
  authDomain: "disneyplus-clone-ffe38.firebaseapp.com",
  projectId: "disneyplus-clone-ffe38",
  storageBucket: "disneyplus-clone-ffe38.firebasestorage.app",
  messagingSenderId: "938256973813",
  appId: "1:938256973813:web:c9f372a3b76b0e2a31eabc",
  measurementId: "G-FTMC7HHRWK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const database = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default database;