firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.alert("user Logged in");
      //window.location.replace("index.html");
    } else {
      // No user is signed in.    
      window.location.reload();
    }
  });

function login()
{
    var userEmail =document.getElementById("email").value;
    var userPass=document.getElementById("password").value;
    // window.alert(userEmail+" "+userPass);
    // window.alert("Working Properly");

     firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: "+errorMessage);

      });
}