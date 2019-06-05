import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER 
} from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    user: null, 
    error: '',
    loading: false 
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        //make a new object, take all of the properties of the existing state object
        // and throw hem into that object.
        // then define the property email given the value of action not the payload and
        // toss it on top of the properties of the state object
        // in other words, the action.payload is going to overwrite the excisting
        // property on the state object
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }; 
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true,  error: '' };
        case LOGIN_USER_SUCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: "Authentication Failed!!!", loading: false, password: '', email: '' };
        default:
            return state;
    }
};

