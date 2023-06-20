import { initializeApp } from "firebase/app";
import { OAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwaooq5sZUJQQqXYPRaasa_JRJpXkT7e4",
  authDomain: "sfsa-f42c2.firebaseapp.com",
  projectId: "sfsa-f42c2",
  storageBucket: "sfsa-f42c2.appspot.com",
  messagingSenderId: "703696626372",
  appId: "1:703696626372:web:dd7e4b5517c42064dd9f91",
  // measurementId: "G-MSHLK94N9C"
};

export const app = initializeApp(firebaseConfig),
  auth = getAuth(),
  microsoftProvider = new OAuthProvider("microsoft.com");

export const db = getFirestore(app);
const usersRef = collection(db, "users");

export const getUserDocument = async (userUid) => {
  const userRef = doc(usersRef, userUid);

  const userSnapshot = await getDoc(userRef);

  return userSnapshot;
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(usersRef, userAuth.uid);

  const userSnapshot = await getUserDocument(userAuth.uid);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(usersRef, userAuth.uid), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {}
  }

  return userRef;
};

export const getCurrentUser = () =>
  new Promise((reseolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      reseolve(userAuth);
    }, reject);
  });
