import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "sharing-recipes.firebaseapp.com",
    projectId: "sharing-recipes",
};

firebase.initializeApp(firebaseConfig);
export default firebase;