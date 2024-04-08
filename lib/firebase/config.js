import { getAuth } from "firebase/auth";

import { initializeApp   } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvM2vkB868ytBF-p23L2NWoVvL_igpIDE",
  authDomain: "nike-app-c0756.firebaseapp.com",
  projectId: "nike-app-c0756",
  storageBucket: "nike-app-c0756.appspot.com",
  messagingSenderId: "255957932691",
  appId: "1:255957932691:web:0d1f8b4f944d6cf0680b66",
  measurementId: "G-F4X9WCPYKN"
};


const app = initializeApp(firebaseConfig);
export const Auth =getAuth(app);
export default app;