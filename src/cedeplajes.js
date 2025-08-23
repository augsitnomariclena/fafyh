  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCYd0a54cP6DG8KdJCKJPQvNkYlWyYjcnE",
  authDomain: "vabengibreca504.firebaseapp.com",
  projectId: "vabengibreca504",
  storageBucket: "vabengibreca504.firebasestorage.app",
  messagingSenderId: "22006686059",
  appId: "1:22006686059:web:288b69a5a92895c10f6c2e",
  measurementId: "G-KFMGW9W7QL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
