import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBr29R_X1uOZdczO8QMcfPpfqp-KUZiBxQ",
    authDomain: "prueba-react-7f2f0.firebaseapp.com",
    databaseURL: "https://prueba-react-7f2f0.firebaseio.com",
    projectId: "prueba-react-7f2f0",
    storageBucket: "prueba-react-7f2f0.appspot.com",
    messagingSenderId: "384462623839",
    appId: "1:384462623839:web:91f43f1e372e34f40977ea",
    measurementId: "G-PFXYTJ51HT"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
