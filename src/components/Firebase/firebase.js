// import app from 'firebase/app';
import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCIu1w5-lHqtr3M9b3VKl7tHyjPHxEVQxs",
    authDomain: "brunorecipe2-4053d.firebaseapp.com",
    databaseURL: "https://brunorecipe2-4053d.firebaseio.com",
    projectId: "brunorecipe2-4053d",
    storageBucket: "brunorecipe2-4053d.appspot.com",
    messagingSenderId: "564753140528"
  }

  firebase.initializeApp(config);

  const db = firebase.database();
  console.log(db);

  const dbRef = db.ref();

 dbRef.on('value', snapshot => {
  console.log(snapshot.val());
  });






  // dbRef.on('value', gotData, errData);
  //
  // function gotData(data) {
  //   console.log(data.val());
  // }
  //
  // function errData(err) {
  //   console.log("ERROR!", err);
  // }


export default firebase;

//   class Firebase {
//   constructor() {
//     app.initializeApp(config);
//   }
// }
//
// export default Firebase;


// import firebase from 'firebase'
//   Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCIu1w5-lHqtr3M9b3VKl7tHyjPHxEVQxs",
  //   authDomain: "brunorecipe2-4053d.firebaseapp.com",
  //   databaseURL: "https://brunorecipe2-4053d.firebaseio.com",
  //   projectId: "brunorecipe2-4053d",
  //   storageBucket: "brunorecipe2-4053d.appspot.com",
  //   messagingSenderId: "564753140528"
  // };
  // firebase.initializeApp(config);
  //
  // // Get a reference to the database service
  // const db = firebase.database();
  // // const db = firebase.database().db('bruno');
  //
  //
  // }

// export default firebase;
