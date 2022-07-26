
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAwX68gL5wasN4lR8FC1ZzMHGNTgw0XLdA",
    authDomain: "twitter-ba357.firebaseapp.com",
    databaseURL: "https://twitter-ba357-default-rtdb.firebaseio.com",
    projectId: "twitter-ba357",
    storageBucket: "twitter-ba357.appspot.com",
    messagingSenderId: "613271964699",
    appId: "1:613271964699:web:98265bd2c4db5abb64bcbe",
    measurementId: "G-PG3H0QS6JH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebaseConfig,databace().ref("/").child(user_name).update({

    });
  }