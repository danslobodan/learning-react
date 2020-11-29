export default (state = [], action) => {

    switch(action.type) {
        case 'FETCH_USER':
            return state = [...state, action.payload];
        default:
            return state;
    }
}