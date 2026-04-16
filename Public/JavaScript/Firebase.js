import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey:            "AIzaSyA_eGczFAhgn6kr5_qmv2ahhqoBPAum30o",
    authDomain:        "fynex-bfd2b.firebaseapp.com",
    projectId:         "fynex-bfd2b",
    storageBucket:     "fynex-bfd2b.firebasestorage.app",
    messagingSenderId: "895619375045",
    appId:             "1:895619375045:web:9c4052f9fea93fae2d35ac"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }
