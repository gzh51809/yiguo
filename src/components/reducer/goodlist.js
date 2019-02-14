let defaultState = {goodlist:[]};
let reducer = function(state=defaultState,action) {
    switch (action.type) {
        case 'QQ':
            return [...state.goodlist,action.payload]
        default:
            return state;
    }
}
export default reducer;