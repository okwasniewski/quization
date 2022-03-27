import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  FacebookAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGl75B0O_F4RFlFKvUAxCQyIe68PdBmU8",
  authDomain: "quization-9a464.firebaseapp.com",
  projectId: "quization-9a464",
  storageBucket: "quization-9a464.appspot.com",
  messagingSenderId: "203891306053",
  appId: "1:203891306053:web:0377b6f5242f759853fd2c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();


const GoogleLogin = (cb) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      cb()
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

const FacebookLogin = (cb) => {
  signInWithPopup(auth, fbProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      cb()
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      alert(errorMessage);
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
    });
}

const emailLogin = (cb) => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      cb()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode, errorMessage);
    });
};

const emailRegister = (cb) => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      cb()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};


const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  GoogleLogin,
  FacebookLogin,
  emailLogin,
  emailRegister,
  logout,
};