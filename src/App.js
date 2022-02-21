import './App.css';
import React,{useState} from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [photoSrc,setPhotoSrc]=useState('');

  const signInWithFirebase=()=>{
    const google_provider=new GoogleAuthProvider();
    signInWithPopup(auth,google_provider)
    .then((res)=>{
      setName(res.user.displayName);
      setEmail(res.user.email);
      setPhotoSrc(res.user.photoURL);
    }).catch((error)=>{
      console.log(error.message)
    }); 
  }
  return (
    <div className="App">
      <button onClick={signInWithFirebase}>Sign with google</button>
      <p>{name}</p>
      <p>{email}</p>
      <img src={photoSrc} />
    </div>
  );
}

export default App;
