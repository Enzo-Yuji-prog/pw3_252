import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyA9pTMIkLAF_w6ZlNVn1686rlOael_hqPM",
  authDomain: "appetecchat.firebaseapp.com",
  projectId: "appetecchat",
  storageBucket: "appetecchat.firebasestorage.app",
  messagingSenderId: "862920758301",
  appId: "1:862920758301:web:fa68da614459e6dbbba2f4",
  measurementId: "G-0D9H4ZG5ZW"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);
