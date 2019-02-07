import app from 'firebase/app';
// import firebase from 'firebase';

let db

  const config = {
    apiKey: "AIzaSyCIu1w5-lHqtr3M9b3VKl7tHyjPHxEVQxs",
    authDomain: "brunorecipe2-4053d.firebaseapp.com",
    databaseURL: "https://brunorecipe2-4053d.firebaseio.com",
    projectId: "brunorecipe2-4053d",
    storageBucket: "brunorecipe2-4053d.appspot.com",
    messagingSenderId: "564753140528"
  }

//   firebase.initializeApp(config);
// export default firebase;

  class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;


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
