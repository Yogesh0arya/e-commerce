import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAny1kqHSx_OqdDxqGJO1vB_QCl3AAH3TM",
    authDomain: "e-commerce-678ad.firebaseapp.com",
    projectId: "e-commerce-678ad",
    storageBucket: "e-commerce-678ad.appspot.com",
    messagingSenderId: "713875760758",
    appId: "1:713875760758:web:6d35279dfc20b02f08e157"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db =  firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  // export default db;