import React,{useState} from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup ,FacebookAuthProvider } from 'firebase/auth';
function App() {
  const [googleName,setName]=useState('');
  const [googleEmail,setEmail]=useState('');
  const [googlePhotoSrc,setPhotoSrc]=useState('');
  const [fbName,setFbName]=useState('');
  const [fbEmail,setFbEmail]=useState('');
  const [fbPhotoSrc,setFbPhotoSrc]=useState('');

  const signInWithGoogle=()=>{
    const google_provider=new GoogleAuthProvider();
    signInWithPopup(auth,google_provider)
    .then((res)=>{
      setName(res.user.displayName);
      setEmail(res.user.email);
      setPhotoSrc(res.user.photoURL);
      console.log(res);
    }).catch((error)=>{
      console.log(error.message)
    }); 
  }

  const signInWithFacebook=()=>{
      const facebook_provider = new FacebookAuthProvider();
      signInWithPopup(auth, facebook_provider)
        .then((result) => {
          setFbName(result.user.displayName);
          setFbEmail(result.user.email);
          setFbPhotoSrc(result.user.photoURL);
          console.log(result)
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.message)
        });
  }
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign with google</button>
      <p>{googleName}</p>
      <p>{googleEmail}</p>
      <img src={googlePhotoSrc} />
      <button onClick={signInWithFacebook}>Sign with facebook</button>
      <p>{fbName}</p>
      <p>{fbEmail}</p>
      <img src={fbPhotoSrc} />
    </div>
  );
}

export default App;
