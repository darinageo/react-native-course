// we need an initial value. it can't retirn undefined!!!
export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default: 
            return state;
    }
}

