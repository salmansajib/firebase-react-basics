import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIPeP_wu9FrdiEA-MP9qPYMrS5wTvcK8o",
  authDomain: "fir-course-ad343.firebaseapp.com",
  projectId: "fir-course-ad343",
  storageBucket: "fir-course-ad343.appspot.com",
  messagingSenderId: "749779905129",
  appId: "1:749779905129:web:239cb49864cf7d5ea410f8",
  measurementId: "G-LQ7XN48M9K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
