import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOo7_Q8bn-ELqKJlDjzE_NLUiF4Whc_W0",
  authDomain: "colab-techacks.firebaseapp.com",
  databaseURL: "https://colab-techacks.firebaseio.com",
  projectId: "colab-techacks",
  storageBucket: "colab-techacks.appspot.com",
  messagingSenderId: "151320728787",
  appId: "1:151320728787:web:56383b63a5bd6bc8583026",
  measurementId: "G-2N2PVJSQWP"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
