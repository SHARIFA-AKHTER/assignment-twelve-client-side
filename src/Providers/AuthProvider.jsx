import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    updateProfile,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

// Create Context
export const AuthContext = createContext(null);

// Initialize Firebase Auth
const auth = getAuth(app);
// const firestore = getFirestore(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);
    const [company, setCompany] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(false);

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
        setPaymentStatus(false); 
        setLoading(true);
        return signOut(auth);

    };

    // Update user profile (name and photo)
    const updateUserProfile = (name, photo, newRole) => {
        setRole(newRole);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    // Track the currently logged-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log("Auth change:", currentUser);
            setUser(currentUser);

            if (currentUser) {
                try {
                    const res = await axios.get(`http://localhost:3000/users/${currentUser.email}`);
                    // console.log("Fetching user info for", currentUser.email);
                      console.log("User data from backend:", res.data);
                      console.log("User role from backend:", res.data.role);
                    setRole(res.data.role ? res.data.role : "employee");
                    setCompany(res.data.company); 
                    setUserInfo(res.data);
                     // Set payment status based on the role or some condition
                     if (res.data.role === 'hr_manager') {
                        setPaymentStatus(res.data.paymentStatus || false); 
                    }
                    
                } catch (error) {
                    console.error('Error fetching user info:', error);
                    
                }finally {
                  
                    setLoading(false); 
                }
            } else {
                setRole(null);
                setCompany(null);
                setUserInfo(null);
                setPaymentStatus(false);
                setLoading(false);
            } 
            
        });

        return () => unsubscribe();
    }, []);
  
    // Define the Auth Context value
    const AuthInfo = {
        user,
       company,
       userInfo,
        loading,
        role,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,
        githubSignIn,
        paymentStatus
    };

    // Render the provider with children
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

