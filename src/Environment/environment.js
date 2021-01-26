import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnh-_ee2oOZiCKWbWnT1ePuZhPXFJroWw",
  authDomain: "catalog-products-ac193.firebaseapp.com",
  projectId: "catalog-products-ac193",
  storageBucket: "catalog-products-ac193.appspot.com",
  messagingSenderId: "996144342242",
  appId: "1:996144342242:web:5c27c5ed86aff972916abb",
  measurementId: "G-8E80VGS188"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;