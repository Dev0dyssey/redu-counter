export default (state = 0, action) => {
    switch(action.type){
        case 'ADD_VALUE':
            return state + action.payload;
        case 'SUBTRACT_VALUE':
            return state - action.payload;
        default:
            return state;
    }
}