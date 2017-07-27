import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDTq_vLHa5FKZcWkVir2O8LXL7oGqxI4K8",
	authDomain: "be-productive-3ba63.firebaseapp.com",
	databaseURL: "https://be-productive-3ba63.firebaseio.com",
	projectId: "be-productive-3ba63",
	storageBucket: "be-productive-3ba63.appspot.com",
	messagingSenderId: "544683593878"
};

firebase.initializeApp(config);

let database = firebase.database();

export { database };