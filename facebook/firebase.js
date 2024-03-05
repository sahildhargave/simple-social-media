// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBgCj-bwlE09jdPqQbAbJXI_F9INSEcnjE",
  authDomain: "kfacebook-5a528.firebaseapp.com",
  projectId: "kfacebook-5a528",
  storageBucket: "kfacebook-5a528.appspot.com",
  messagingSenderId: "695726290180",
  appId: "1:695726290180:web:cd16e0456a357d5aa80c51",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };