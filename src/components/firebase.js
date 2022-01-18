import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsZauFPSj7UABz-cYqqUg2OcwY_UFqyzI",
  authDomain: "la-bodega-de-willy.firebaseapp.com",
  projectId: "la-bodega-de-willy",
  storageBucket: "la-bodega-de-willy.appspot.com",
  messagingSenderId: "226803498391",
  appId: "1:226803498391:web:e6a6ad8f6c87114ab6d8d2",
};
//referencia de la consola de firestore
const app = initializeApp(firebaseConfig);
//referencia de la base de datos
export const db = getFirestore(app);
