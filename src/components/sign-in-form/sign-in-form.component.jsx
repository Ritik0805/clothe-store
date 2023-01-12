import React, { useState } from "react";
// import { useContext } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong password");
        return;
      }
      if (error.code === "auth/user-not-found") {
        alert("User not found!");
        return;
      }
      console.log("Error");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-containers">
          <Button type="submit">Sign In button</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
