<script src="https://www.gstatic.com/firebasejs/5.10.0/firebase.js"></script>
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBJSpeiLpsALteamK8s4i86EPbVARLGLi0",
  authDomain: "suggestion-box-c58b1.firebaseapp.com",
  databaseURL: "https://suggestion-box-c58b1.firebaseio.com",
  projectId: "suggestion-box-c58b1",
  storageBucket: "suggestion-box-c58b1.appspot.com",
  messagingSenderId: "608313282468"
};
firebase.initializeApp(config);

var myDatabase = firebase.database();

function writeData() {
	var uName = "bob";
	var pass = "ross";
	var uid = "testID";
	firebase.myDatabase().ref().child("users").child(uid).push().set( {
		username: uName,
		password: pass
	});
	document.getElementById("demo").innerHTML = "maybe";
}
