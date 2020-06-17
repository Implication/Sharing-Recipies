import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAn5EGjLVMLwVvaQvLrNjf6OBO7AzsWCeI",
    authDomain: "sharing-recipes.firebaseapp.com",
    projectId: "sharing-recipes",
};

firebase.initializeApp(firebaseConfig);
export default firebase;