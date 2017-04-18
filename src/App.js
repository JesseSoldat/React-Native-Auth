import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyAw5uIZdlyPYjBuYoc8zRjbiv0-lxWANys',
	    authDomain: 'playground-3f11f.firebaseapp.com',
	    databaseURL: 'https://playground-3f11f.firebaseio.com',
	    projectId: 'playground-3f11f',
	    storageBucket: 'playground-3f11f.appspot.com',
	    messagingSenderId: '1016399993027'
	  });

	  firebase.auth().onAuthStateChanged((user) => {
	  	if(user) {
	  		this.setState({ loggedIn: true });
	  	} else {
	  		this.setState({ loggedIn: false });
	  	}
	  });
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication"/>
				<LoginForm/>
			</View>
		);
	}
}

export default App;