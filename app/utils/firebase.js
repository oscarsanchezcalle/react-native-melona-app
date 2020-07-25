import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvaHPZiDADLgkCuXNYjv_uLsQpcxF_zTw",
  authDomain: "melona-app.firebaseapp.com",
  databaseURL: "https://melona-app.firebaseio.com",
  projectId: "melona-app",
  storageBucket: "melona-app.appspot.com",
  messagingSenderId: "958900145163",
  appId: "1:958900145163:web:99670d0f282acd4250cb0e",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
