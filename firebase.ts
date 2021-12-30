// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getStorage } from 'firebase/storage';
import { env } from 'process';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Initialize Firebase
initializeApp({
  apiKey: env.FIREBASE_KEY,
  authDomain: 'onlinestore-dd493.firebaseapp.com',
  projectId: 'onlinestore-dd493',
  storageBucket: 'onlinestore-dd493.appspot.com',
  messagingSenderId: '315093080873',
  appId: '1:315093080873:web:2bfd222171152ca9a43538',
});

// Storage
export const firebaseStorage = getStorage();
