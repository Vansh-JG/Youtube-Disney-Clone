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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  