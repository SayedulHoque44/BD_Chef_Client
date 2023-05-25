// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: import.meta.env.VITE_PASS_apiKey,
  authDomain: import.meta.env.VITE_PASS_authDomain,
  projectId: import.meta.env.VITE_PASS_projectId,
  storageBucket: import.meta.env.VITE_PASS_storageBucket,
  messagingSenderId:import.meta.env.VITE_PASS_messagingSenderId ,
  appId: import.meta.env.VITE_PASS_appId
  
};
// Warning : Comma Caused Error In Env File, Now Ok
// Initialize Firebase
export const app = initializeApp(firebaseConfig);