
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwUv3-34dqxBZisRLvzgIQdwuogxFX9S4",
  authDomain: "deneme-todo-react.firebaseapp.com",
  projectId: "deneme-todo-react",
  storageBucket: "deneme-todo-react.appspot.com",
  messagingSenderId: "1019099077205",
  appId: "1:1019099077205:web:bfa7681974e7ffdaa6d2dc",
  measurementId: "G-XPSWHLHPCP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)