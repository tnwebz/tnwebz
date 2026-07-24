import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqS9jmnKgfCMx7-XxksCLiWoIHyaXnWcM",
  authDomain: "tnwebz.firebaseapp.com",
  projectId: "tnwebz",
  storageBucket: "tnwebz.firebasestorage.app",
  messagingSenderId: "444106194607",
  appId: "1:444106194607:web:1e2456d86cccd7e9cd9e5a"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
