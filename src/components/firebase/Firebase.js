import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEQybS4EJpnhv0WiSS80RNwl7VBcp4ZVI",
  authDomain: "clothing-store-backend.firebaseapp.com",
  databaseURL: "https://clothing-store-backend.firebaseio.com",
  projectId: "clothing-store-backend",
  storageBucket: "clothing-store-backend.appspot.com",
  messagingSenderId: "1078397740080",
  appId: "1:1078397740080:web:ccd0d0c9d12610c360f9f5",
  measurementId: "G-1B9G9ZERD7"
};

export const createUserDocument = async (userFromAuth, additionalInfo) => {
  if (!userFromAuth) return;
  const userRef = firestore.doc(`users/${userFromAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userFromAuth;
    const dateCreated = new Date();

    try {
      await userRef.set({ displayName, email, dateCreated, ...additionalInfo });
    } catch (error) {
      console.log("An Error occurred while creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
