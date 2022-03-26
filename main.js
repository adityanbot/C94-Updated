const firebaseConfig = {
    apiKey: "AIzaSyB2lvePlIj7JWkKXT8rQoPCC2TfLF1_DEs",
    authDomain: "kwitter-f7c1d.firebaseapp.com",
    databaseURL: "https://kwitter-f7c1d-default-rtdb.firebaseio.com",
    projectId: "kwitter-f7c1d",
    storageBucket: "kwitter-f7c1d.appspot.com",
    messagingSenderId: "567476796389",
    appId: "1:567476796389:web:325d88d923c2654e558d0c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name=document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Adding User"
    });
}