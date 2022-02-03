import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsZauFPSj7UABz-cYqqUg2OcwY_UFqyzI",
  authDomain: "la-bodega-de-willy.firebaseapp.com",
  projectId: "la-bodega-de-willy",
  storageBucket: "la-bodega-de-willy.appspot.com",
  messagingSenderId: "226803498391",
  appId: "1:226803498391:web:e6a6ad8f6c87114ab6d8d2",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
