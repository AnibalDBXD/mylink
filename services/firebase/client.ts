import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./config";
import { IUser } from "./types";

const normalizeUser = ({ displayName, photoURL, uid }: firebase.User): IUser => {
    const username = displayName || "User";
    const avatar = photoURL || "default";
    return {
        avatar,
        username,
        id: uid
    };

};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const onAuthStateChanged = (
    handleChange: (user: IUser) => void, handleError: (errorMessage: string) => void): void =>{
    firebase.auth().onAuthStateChanged(
        (userData) => {
            if (userData) {
                handleChange(normalizeUser(userData));
            }
    },(error => handleError(error.message)));
};

export const loginWithGithub = (): void => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(githubProvider);
};

export const signOut = (): Promise<void> => firebase.auth().signOut();