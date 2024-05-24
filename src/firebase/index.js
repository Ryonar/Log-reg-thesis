
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBSBrgJZxwNhwefwYrMgm9lO1Lp6i7Khtc",
  authDomain: "vue-fire-auth-yt-49f76.firebaseapp.com",
  projectId: "vue-fire-auth-yt-49f76",
  storageBucket: "vue-fire-auth-yt-49f76.appspot.com",
  messagingSenderId: "80611769293",
  appId: "1:80611769293:web:02fd6589b4dd0636a3a284"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }