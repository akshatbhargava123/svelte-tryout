import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWjPP4cvC34t1FZW8ZjH1nxwFlqcS4BuM",
  authDomain: "chat-app-5cddb.firebaseapp.com",
  projectId: "chat-app-5cddb",
  storageBucket: "chat-app-5cddb.appspot.com",
  messagingSenderId: "605623232266",
  appId: "1:605623232266:web:ef416ce8d47ece750dfcf3"
};

if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}


