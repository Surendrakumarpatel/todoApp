import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHql6BD4fff69B8-4WdzCOlp5aGOJ4vSM",
    authDomain: "todoapp-1ebe9.firebaseapp.com",
    projectId: "todoapp-1ebe9",
    storageBucket: "todoapp-1ebe9.appspot.com",
    messagingSenderId: "955912814699",
    appId: "1:955912814699:web:17e0d7d5c200d7d0a5312e",
    measurementId: "G-HZV903NNYR"
});
const db = firebaseApp.firestore();
 
export default db;