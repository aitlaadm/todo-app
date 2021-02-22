import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyC4SSQoqX5oSzr2eCAjorWvdeLtYrowR04",
    authDomain: "gestion-des-taches-fc8bc.firebaseapp.com",
    databaseURL: "https://gestion-des-taches-fc8bc.firebaseio.com",
    projectId: "gestion-des-taches-fc8bc",
    storageBucket: "gestion-des-taches-fc8bc.appspot.com",
    messagingSenderId: "800968452450",
    appId: "1:800968452450:web:5e51e555690dcb213c243b",
    measurementId: "G-B13BXH2YTP"
});

const db = firebaseapp.firestore();

export default db;