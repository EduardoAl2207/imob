import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6m_feeUbK8X_jsC9E2IQti1VpAvyZLuI",
  authDomain: "house-marketplace-app-5baac.firebaseapp.com",
  projectId: "house-marketplace-app-5baac",
  storageBucket: "house-marketplace-app-5baac.appspot.com",
  messagingSenderId: "651513192714",
  appId: "1:651513192714:web:666972e34d9054dc451af3"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()