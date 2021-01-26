import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1XjZN8nzrF_qJH7Me9eQMIm17D6FadWA",
  authDomain: "catalogproducts.firebaseapp.com",
  projectId: "catalogproducts",
  storageBucket: "catalogproducts.appspot.com",
  messagingSenderId: "887311283164",
  appId: "1:887311283164:web:e969c136baa4a9db1fd519",
  measurementId: "G-EX95W0TB30"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;