import {initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBG_jURoc-QsFA88Qf4UXl3OY4f-l-l1tc",
  authDomain: "auth-assignment-a9d2c.firebaseapp.com",
  projectId: "auth-assignment-a9d2c",
  storageBucket: "auth-assignment-a9d2c.appspot.com",
  messagingSenderId: "781281792779",
  appId: "1:781281792779:web:ebe654960236b92fa7880e"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);


