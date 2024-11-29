import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_iVA90ZBZMR-kuNvIf9763UJ3Bs1HslA",
  authDomain: "wealth-app-494a2.firebaseapp.com",
  projectId: "wealth-app-494a2",
  storageBucket: "wealth-app-494a2.firebasestorage.app",
  messagingSenderId: "715007239792",
  appId: "1:715007239792:web:c51110f3bc61d64047f6b5",
  measurementId: "G-T3R646NZ7X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export { auth };