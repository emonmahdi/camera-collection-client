import { useEffect, useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider , signInWithPopup, signOut, onAuthStateChanged, updateProfile  } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // user registration
    const registerUser = (email, password, name, history) => {
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
          setAuthError('')
          const newUser = {email, displayName: name}
          setUser(newUser)
          // save user to the mongodb
          saveUser(email, name, 'POST');
          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName:name 
            }).then(() => { 
            }).catch((error) => { 
            });
          history.replace('/'); 
          })
          .catch((error) => { 
            setAuthError(error.message); 
          })
          .finally(() => setIsLoading(false));
    }
    // login user &&& private route
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
              // private route redirect 
              const destination = location?.state?.from || '/';
              history.replace(destination);
              setAuthError('');
            })
            .catch((error) => { 
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    } 
    // google login system
    const signInWithGoogle = (location, history) => {
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          setAuthError('');
          saveUser(user?.email, user?.displayName, 'PUT'); 
          const destination = location?.state?.from || '/';
          history.replace(destination);
        }).catch((error) => {
          setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }

    // onAuthStateChange obserbe user state
    useEffect( () => {
      const unsubcribed =   onAuthStateChanged(auth, (user) => {
            if (user) { 
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubcribed;
    }, [])

    useEffect( () => {
      fetch(`https://floating-brushlands-69633.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin));
    }, [user.email])

    // singOut function
    const logOut =() => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
         .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://floating-brushlands-69633.herokuapp.com/users', {
        method:method,
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut
    }
}

export default useFirebase;