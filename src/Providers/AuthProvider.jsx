import { createContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
     getAuth, 
     GoogleAuthProvider, 
     onAuthStateChanged,
      signInWithEmailAndPassword, 
      signInWithPopup, 
      signOut, 
      updateProfile
    } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth/web-extension";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider(); 
    setLoading(true);
    return signInWithPopup(auth, googleProvider); 
};

 // Sign in with GitHub
 const loginWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); 
    } catch (error) {
      console.error("GitHub Sign-In Error:", error.message);
    }
  };
const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

const updateUserProfile = (name, photo)=>{
   return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    });
}
    useEffect( ()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        });
        return() =>{
            return unSubscribe();
        }
    },[])
    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        loginWithGithub
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;