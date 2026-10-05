const firebaseConfig = {
  apiKey: "AIzaSyB9-qUDBAnL1O1IgxKVpvRn1jBEzRIjJ9U",
  authDomain: "pawbnb-a1e98.firebaseapp.com",
  projectId: "pawbnb-a1e98",
  storageBucket: "pawbnb-a1e98.firebasestorage.app",
  messagingSenderId: "261624492388",
  appId: "1:261624492388:web:ebcc45b369e413f2fd0a71",
  measurementId: "G-8JXWJZDC6Y"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


function getUserProfile(uid){
  return db.collection("users").doc(uid).get().then(s=>s.exists?s.data():null);
}
function createUserProfile(uid,data){
  return db.collection("users").doc(uid).set({
    name: data.name||"",
    email: data.email||"",
    role: "user",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}