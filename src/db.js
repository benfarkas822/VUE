import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAT_Kh9JqHrbu7Nwx_HgSDhpMYB2fx0PoM",
    authDomain: "firevuechat-3688e.firebaseapp.com",
    projectId: "firevuechat-3688e",
    storageBucket: "firevuechat-3688e.appspot.com",
    messagingSenderId: "834119275073",
    appId: "1:834119275073:web:49f58d1f6dcc5fb53facc0"
}

const db = firebase.initializeApp(config);
export default db;