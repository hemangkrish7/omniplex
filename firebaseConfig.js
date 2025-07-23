import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC8XftSTgzzDGR45GsxSgPnCGeeQOrujyM",
  authDomain: "omniplex-98c10.firebaseapp.com",
  projectId: "omniplex-98c10",
  storageBucket: "omniplex-98c10.firebasestorage.app",
  messagingSenderId: "259049861013",
  appId: "1:259049861013:web:6a9b65f57e15be4c3f909c",
  measurementId: "G-G932NBHB2S"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
