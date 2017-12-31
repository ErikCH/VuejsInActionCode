import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAwnOLfgMu51uTdxzlDzHrfCoNI6Qof1qE",
    authDomain: "petstore-fire.firebaseapp.com",
    databaseURL: "https://petstore-fire.firebaseio.com",
    projectId: "petstore-fire",
    storageBucket: "petstore-fire.appspot.com",
    messagingSenderId: "1047737302684"
});

export const db = app.database();

export const productsRef = db.ref('products');
