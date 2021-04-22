import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDd7LeDbXdmXDa414bklvbythfwUX5VlNo",
    authDomain: "barbaard-6a6d9.firebaseapp.com",
    projectId: "barbaard-6a6d9",
    storageBucket: "barbaard-6a6d9.appspot.com",
    messagingSenderId: "895148628135",
    appId: "1:895148628135:web:ea5d4fb7f71f21f32ae382",
    measurementId: "G-M4GZCVSP9B"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase