import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../config";
import { IUser } from "../types";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const onAuthStateChanged = (
  handleChange: (user: IUser) => void, handleError: (errorMessage: string) => void): void =>{
  firebase.auth().onAuthStateChanged(
    (userData) => {
      if (userData) {
        handleChange({ id: userData.uid});
      }
    },(error => handleError(error.message)));
};

export const loginWithGithub = (): void => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(githubProvider);
};

export const loginWithGoogle = (): void => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
};

export const loginWithFacebook = (): void => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(facebookProvider);
};

export const loginWithTwitter = (): void => {
  const twitter = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithPopup(twitter);
};

export const signOut = (): Promise<void> => firebase.auth().signOut();