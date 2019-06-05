import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyBa4L2k_EDV2F35bpCKfhsNLfaMOHgBdiA',
            authDomain: 'manager-7f648.firebaseapp.com',
            databaseURL: 'https://manager-7f648.firebaseio.com',
            projectId: 'manager-7f648',
            storageBucket: 'manager-7f648.appspot.com',
            messagingSenderId: '782779797216'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
              <Router />
            </Provider>
        ); 
    }
}

export default App;
