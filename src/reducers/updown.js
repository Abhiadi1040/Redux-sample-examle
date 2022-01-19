const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    console.log('insidereducer',action.payload)
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeTheNumber;