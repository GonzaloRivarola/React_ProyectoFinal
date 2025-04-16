
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9pQjdt889lGvkpKfrpWGjEXAM5GBdECs",
    authDomain: "pr1g-3afb9.firebaseapp.com",
    projectId: "pr1g-3afb9",
    storageBucket: "pr1g-3afb9.firebasestorage.app",
    messagingSenderId: "382383941567",
    appId: "1:382383941567:web:3d21410e4ef2f0fa26630a",
    measurementId: "G-X3JDZGEZ5K"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };