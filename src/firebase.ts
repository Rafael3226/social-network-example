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
  authDomain: 'social-network-4787e.firebaseapp.com',
  projectId: 'social-network-4787e',
  storageBucket: 'social-network-4787e.appspot.com',
  messagingSenderId: '556596021960',
  appId: '1:556596021960:web:db4c8d29b87ca48aeab3fd',
});

// Storage
export const firebaseStorage = getStorage();
