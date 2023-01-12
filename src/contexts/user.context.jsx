import React, { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils.js";
// as the actual value you want to access
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe; //ie. unsubscribe when you unmount
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
