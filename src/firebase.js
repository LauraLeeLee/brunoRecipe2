// import firebase from 'firebase'
//   Initialize Firebase
  var config = {
    apiKey: "AIzaSyCIu1w5-lHqtr3M9b3VKl7tHyjPHxEVQxs",
    authDomain: "brunorecipe2-4053d.firebaseapp.com",
    databaseURL: "https://brunorecipe2-4053d.firebaseio.com",
    projectId: "brunorecipe2-4053d",
    storageBucket: "brunorecipe2-4053d.appspot.com",
    messagingSenderId: "564753140528"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  const db = firebase.database();
  // const db = firebase.database().db('bruno');

  db.get().then(snapshot) =>  {
    console.log(snapshot.docs);
  }

// export default firebase;
