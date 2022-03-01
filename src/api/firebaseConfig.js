import firebase from "firebase";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEKEY,
    projectId: process.env.REACT_APP_PROJECTID,
};
firebase.initializeApp(firebaseConfig);
export const FireAuth = firebase.auth;
export const Firedb = firebase.database();

