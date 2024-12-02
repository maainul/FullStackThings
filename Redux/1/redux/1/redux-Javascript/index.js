/*
const { createStore } = require("redux");

const RESET = "RESET";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY = "INCREMENT_BY";

// state
const initialState = {
  count: 0,
};

// action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const incrementByCounter = (value) => {
  return {
    type: INCREMENT_BY,
    payload: value,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

      case INCREMENT_BY:
        return{
          ...state,
          count:state.count + action.payload
        }

    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

// store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementByCounter(5));
*/
// MULTIPLE REDUCER
/*
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// constant
const GET_PROUCTS = "GET_PRODUCTS";
const ADD_PROUCT = "ADD_PRODUCT";
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

const initialCartState = {
  carts: [],
  numberOfProducts: 0,
};

const getProducts = () => {
  return {
    type: GET_PROUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PROUCT,
    payload: product,
  };
};

const getCarts = () => {
  return {
    type: GET_CARTS,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

// reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PROUCTS:
      return {
        ...state,
      };
    case ADD_PROUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        products: [...state.carts, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

// store
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer,applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Pen"));
store.dispatch(addCart("Pen"));
*/

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

// API CALL -

// Constant
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const ADD_TODO = "ADD_TODO";

// state
const initialTodoState = {
  isLodaing: false,
  error: null,
  todos: [],
};

// actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

// reducers
const todosReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLodaing: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLodaing: false,
        todos: action.payload,
        error: null,
      };

    case GET_TODOS_FAILED:
      return {
        isLodaing: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
const API_URL = "https://jsonplaceholder.typicode.com/todos";
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const title = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(title));
      })
      .catch((error) => {
       
        dispatch(getTodosFailed(error.message));
      });
  };
};

// Jokhon amra async operation korbo tokhon thunk lagbe

// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.dispatch(fetchData());
