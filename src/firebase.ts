import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAojjqj3ziWYLyyBsh-MXHkRmX7ySE_rcM",
  authDomain: "ruhacks-c47c0.firebaseapp.com",
  databaseURL: "https://ruhacks-c47c0.firebaseio.com",
  projectId: "ruhacks-c47c0",
  storageBucket: "ruhacks-c47c0.appspot.com",
  messagingSenderId: "115486721182",
  appId: "1:115486721182:web:a55794dc6244f9c5"
});

// let questions = [
//   { text: "What's your favourite part of the day?" },
//   { text: "What causes global warming?" },
//   { text: "What is the most unique animal you know?" },
//   { text: "What is the most unique animal you know?" }
// ];

// questions.forEach(row => {
//   const { text } = row;
//   firebase
//     .database()
//     .ref("/")
//     .push({
//       question: text,
//       upvotes: 0
//     });
// });

export default firebase;
