import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    GithubAuthProvider
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

// Create Context
export const AuthContext = createContext(null);

// Initialize Firebase Auth
const auth = getAuth(app);
// const firestore = getFirestore(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            
        } else {
            setLoading(false); 
        }
    }, []);

    // Create a new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
       
    };

    // Sign in with Google
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Sign in with GitHub
    const githubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // Log out the user
    const logOut = () => {
        setUser(null);
        setRole(null);
        setLoading(true);
        return signOut(auth);
       
    };

    // Update user profile (name and photo)
    const updateUserProfile = (name, photo,newRole) => {
        setRole(newRole); 
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    // Track the currently logged-in user
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
               
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Define the Auth Context value
    const AuthInfo = {
        user,
        loading,
        role,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        githubSignIn
    };

    // Render the provider with children
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

