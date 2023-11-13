// imports
const {createStore} = require('redux');

// initial state
const initialState = {
    bal : 5000,
}


// reducer function 
const reducer = (state= initialState,action) =>{

    switch (action.type) {
        case 'DEPOSIT':
            return{
                ...state,
                bal : action.value
            };
            case 'WITHDRAW':
                return{
                    ...state,
                    bal :action.value
                };

            default :
            state;
    }

}

// store
const store = createStore(reducer);
store.subscribe(() =>{
    console.log(store.getState());
})

// action
store.dispatch({ type: "DEPOSIT", value: 1000 });
store.dispatch({type:'WITHDRAW',value:4000});