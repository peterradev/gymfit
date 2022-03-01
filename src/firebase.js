import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCVYOi8oQugHSQI_pNK9ueJeeOJlVjtNMg",
  authDomain: "gym-fit-98785.firebaseapp.com",
  projectId: "gym-fit-98785",
  storageBucket: "gym-fit-98785.appspot.com",
  messagingSenderId: "465556169238",
  appId: "1:465556169238:web:96c3dbd048e970bce70b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const createUser = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password); 

