import {initializeApp} from 'firebase/app'
import 'firebase/firestore'
import { getFirestore, collection, getDocs, addDocs, updateDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export async function getUser(obj) {
    const userCol = collection(db, 'users');
    const userSnapshot = await getDocs(userCol);
    const cityList = userSnapshot.docs.map(doc => doc.data());

    return cityList;
}

export async function addUsers(obj) {
    const userCol = collection(db, 'users');
    const citySnapshot = await getDocs(userCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    return cityList;
}

export async function updateUser(obj) {
    const userCol = collection(db, 'users');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    return cityList;
}