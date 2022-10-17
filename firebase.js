import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "project-estore-accc4.firebaseapp.com",
  projectId: "project-estore-accc4",
  storageBucket: "project-estore-accc4.appspot.com",
  messagingSenderId: "794280108061",
  appId: "1:794280108061:web:ee06f558179256832b26f4",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export default db;
