// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNTtktCY2njTnDHCFjTC3Fy9t90JY16fY",
  authDomain: "mini-blog-ec5e2.firebaseapp.com",
  projectId: "mini-blog-ec5e2",
  storageBucket: "mini-blog-ec5e2.appspot.com",
  messagingSenderId: "352962571273",
  appId: "1:352962571273:web:9bd31b2a55f505d0fb9cd8",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }