import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyApELgioRzGo7mwVNmsdCrbYnlwVG_uOjo",
    authDomain: "resume-6d379.firebaseapp.com",
    databaseURL: "https://resume-6d379-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "resume-6d379",
    storageBucket: "resume-6d379.appspot.com",
    messagingSenderId: "556873442055",
    appId: "1:556873442055:web:c2dd653a29dcfa92555ba2",
    measurementId: "G-KJS7RHEYYE"
  };

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app);
