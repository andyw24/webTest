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

var myDatabase = firebase.database().ref();
var testBig = document.getElementById('testBig');
myDatabase.child('users').on('value', snap => testBig.innerText = snap.val());

function writeData() {
	var uName = "bob";
	var pass = "ross";
	var uid = "1234";
	var usersRef = myDatabase.child("users").child(uid);
	var newUser = usersRef.push()
	newUser.set({
		username: uName,
		password: pass
	);
	/*
	firebase.myDatabase().child('users').child(uid).push().set( {
		username: uName,
		password: pass
	});
	*/
}
