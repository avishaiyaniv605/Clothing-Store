import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEQybS4EJpnhv0WiSS80RNwl7VBcp4ZVI",
  authDomain: "clothing-store-backend.firebaseapp.com",
  databaseURL: "https://clothing-store-backend.firebaseio.com",
  projectId: "clothing-store-backend",
  storageBucket: "clothing-store-backend.appspot.com",
  messagingSenderId: "1078397740080",
  appId: "1:1078397740080:web:ccd0d0c9d12610c360f9f5",
  measurementId: "G-1B9G9ZERD7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
