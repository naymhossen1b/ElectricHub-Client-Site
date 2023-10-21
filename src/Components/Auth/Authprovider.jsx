/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

//social provider
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);
  
  
    //social login
    const googleLogin = () => {
      setLoding(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    const githubLogin = () => {
      setLoding(true);
      return signInWithPopup(auth, gitProvider);
    }
  
    //create user with email
    const createUser = (email, password) => {
      setLoding(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // signIn user
    const userLogin = (email, password) => {
      setLoding(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    //signOut
  
    const logout = () => {
      setLoding(true);
      return signOut(auth);
    };
  
    //update profile
    const updateOnProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      }) 
    }
  
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoding(false); 
      });
      return () => {
        unSubscribe();
      };
    }, []);


  const authInfo = {
    user,
    googleLogin,
    githubLogin,
    createUser,
    userLogin,
    logout,
    loding,
    updateOnProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};


export default Authprovider;
