import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common'; // by default it will refer to index.js
import LoginForm from './components/LoginForm'

class App extends Component {
componentWillMount() {
    state = { loggedIn: null };

    firebase.initializeApp({
        apiKey: 'AIzaSyD13LjrEYh13iCWSnczW_JbcdVFERgjpEc',
        authDomain: 'authproject-7badb.firebaseapp.com',
        databaseURL: 'https://authproject-7badb.firebaseio.com',
        projectId: 'authproject-7badb',
        storageBucket: 'authproject-7badb.appspot.com',
        messagingSenderId: '958039234866'
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    });
}

renderContent() {
    switch (this.state.loggedIn){
        case true: 
            return (
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>
                );

        case false:
            return <LoginForm />;

        default: <Spinner size="large" />;
    }
}

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;

