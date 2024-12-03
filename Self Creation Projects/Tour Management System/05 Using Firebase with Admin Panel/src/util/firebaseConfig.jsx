import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCu-J1tfJfXRx2gKf-H68qyrCI3QGA0jZc",
    authDomain: "tour-management-system-c33c8.firebaseapp.com",
    databaseURL: "https://tour-management-system-c33c8-default-rtdb.firebaseio.com",
    projectId: "tour-management-system-c33c8",
    storageBucket: "tour-management-system-c33c8.appspot.com",
    messagingSenderId: "407908320875",
    appId: "1:407908320875:web:c98f606fd2d6602e80d32e",
    measurementId: "G-SXB9KTENBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { analytics, app, auth, db, storage };
export default firebaseConfig;