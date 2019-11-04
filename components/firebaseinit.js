import firebase from '@firebase/app'
import firebaseconfig from './firebaseconfig'
import 'firebase/firestore';
const firebaseapp = firebase.initializeApp(firebaseconfig)


export default firebaseapp;