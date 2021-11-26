import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyBxiSCGVRQ7AUPpN68NJSHEh06QjQICzzQ",

    authDomain: "fitnessxprt-3f1fc.firebaseapp.com",

    projectId: "fitnessxprt-3f1fc",

    storageBucket: "fitnessxprt-3f1fc.appspot.com",

    messagingSenderId: "989823482059",

    appId: "1:989823482059:web:bb703d957f0a19d438434e",

    measurementId: "G-DNVJMY9MBP",
};

const fire = firebase.initializeApp(config);
export default fire;

// export const auth = firebase.auth();
// // export const firestore = firebase.firestore();

// // const provider = new firebase.auth.GoogleAuthProvider();
// // provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;