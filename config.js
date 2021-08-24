import firebase from 'firebase';

// add SDK Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTENrrUnPjQzdx4QLxeitVNPtdRZOqGLk",
    authDomain: "votingapp-31c8e.firebaseapp.com",
    projectId: "votingapp-31c8e",
    storageBucket: "votingapp-31c8e.appspot.com",
    messagingSenderId: "508794278366",
    appId: "1:508794278366:web:235bc4dea19ed106a28d4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();