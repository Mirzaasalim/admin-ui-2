import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-ui-9416a.firebaseapp.com",
  projectId: "admin-ui-9416a",
  storageBucket: "admin-ui-9416a.appspot.com",
  messagingSenderId: "289077269918",
  appId: "1:289077269918:web:62978925c9e00093eab28f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();