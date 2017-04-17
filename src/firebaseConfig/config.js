import firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyDCJzqEJh7lfMB6zYnOjLQ_PZNRZHIJEFI",
    authDomain: "inventory-app-a668f.firebaseapp.com",
    databaseURL: "https://inventory-app-a668f.firebaseio.com",
    projectId: "inventory-app-a668f",
    storageBucket: "inventory-app-a668f.appspot.com",
    messagingSenderId: "219087853253"
  };
  firebase.initializeApp(config);

 
export const database = firebase.database();

export const auth = firebase.auth();
