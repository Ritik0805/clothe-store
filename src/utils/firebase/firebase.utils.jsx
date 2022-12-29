import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_LefQwYHJ6Si4OOXrvH_dPRkkJEQItzU",
  authDomain: "crwn-clothing-db-45a8a.firebaseapp.com",
  projectId: "crwn-clothing-db-45a8a",
  storageBucket: "crwn-clothing-db-45a8a.appspot.com",
  messagingSenderId: "263220707099",
  appId: "1:263220707099:web:8031375b00d685e3479dbe",
};

// Initialize Firebase
const firesbaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  //if user data does not exists
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user : ", error.message);
    }
  }
  return userDocRef;
};
