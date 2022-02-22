import './App.css';
import React,{useState} from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";

function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [photoSrc,setPhotoSrc]=useState('');

  const signInWithGoogle=()=>{
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

  const signInWithFacebook=()=>{
      const facebook_provider = new FacebookAuthProvider();
      signInWithPopup(auth, facebook_provider)
        .then((result) => {
          const user = result.user;
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(result)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = FacebookAuthProvider.credentialFromError(error);
          alert(error.message);
          console.log(error.message)
        });
  }
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign with google</button>
      <p>{name}</p>
      <p>{email}</p>
      <img src={photoSrc} />
      <button onClick={signInWithFacebook}>Sign with facebook</button>
    </div>
  );
}

export default App;
