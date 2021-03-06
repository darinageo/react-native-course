import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        pahload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    //console.log(name, phone, shift);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref('/users/${currentUser.uid}/employees')
            .push({name, phone, shift})
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop({ type: 'reset'})
            });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/user/${currentUser.uid}/employees')
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};

