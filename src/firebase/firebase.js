import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBaY_e2MgwLkHexjODkyseo_ZigjbjZC-c",
    authDomain: "institute-manager-4c281.firebaseapp.com",
    projectId: "institute-manager-4c281",
    storageBucket: "institute-manager-4c281.appspot.com",
    messagingSenderId: "135692284397",
    appId: "1:135692284397:web:329d67d56f2919c82b77e4",
    measurementId: "G-CVGYPCWMMN"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };

