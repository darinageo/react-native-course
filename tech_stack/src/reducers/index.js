// window to the rest of the world (app)
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer, // assign LibraryReducer to the libraries key so that we have a key
    selectedLibraryId: SelectionReducer
});