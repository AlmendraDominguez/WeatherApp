import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth }  from '../firebaseConfig/firebase'
import {doc,setDoc} from 'firebase/firestore'
import { db } from "../firebaseConfig/firebase";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async(navigate) => {

    try {
        const result = await signInWithPopup(auth, googleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result)
       const user = result.user

       setDoc(doc(db, "Clientes", user.uid), {
        Nombre: user.displayName,
        Email: user.email
      })
       
       navigate("/WeatherApp/home");
       return {
        ok: true,
        user,
       }

    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
       return {
        ok: false,
        errorMessage
       }
    }
}

export default signInWithGoogle;