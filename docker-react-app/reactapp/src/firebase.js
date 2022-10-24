import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCo-lddwO9Ho_17arCC4jxGAJd5KKT8Q5Y",
  authDomain: "sanso-kawanami-slab.firebaseapp.com",
  projectId: "sanso-kawanami-slab",
  storageBucket: "sanso-kawanami-slab.appspot.com",
  messagingSenderId: "911248032626",
  appId: "1:911248032626:web:463d67b8af1cf86e7793eb",
  measurementId: "G-3EC2XEB81E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();


export {db, auth, provider, storage};
