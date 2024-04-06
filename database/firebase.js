import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnHWqiOItbaslly1FRCahINu0tPoZrlS0",
  authDomain: "fansplay-77e70.firebaseapp.com",
  projectId: "fansplay-77e70",
  storageBucket: "fansplay-77e70.appspot.com",
  messagingSenderId: "8707632123",
  appId: "1:8707632123:web:0b1e5e8ef58b037e31f95e",
  measurementId: "G-NH8YRPXW5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

