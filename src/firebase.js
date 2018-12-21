import Firebase from 'firebase/firebase';

let config = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  storageBucket: "...",
  messagingSenderId: "..."
};

const app = Firebase.initializeApp(config);

export const db = app.database();