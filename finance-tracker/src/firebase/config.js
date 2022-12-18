import "firebase/firestore"
import "firebase/auth"

import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCy5kSjOn_NpMLME1TJ7X0APJWKJwCHeo8",
    authDomain: "mymoney-38933.firebaseapp.com",
    projectId: "mymoney-38933",
    storageBucket: "mymoney-38933.appspot.com",
    messagingSenderId: "371305219712",
    appId: "1:371305219712:web:cd4877a7954074fd4d8865",
    measurementId: "G-4FZFKZWYF3"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth } 
