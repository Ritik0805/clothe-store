import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

export default function SignIn() {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirec
      </button>
      <SignUpForm />
    </div>
  );
}
