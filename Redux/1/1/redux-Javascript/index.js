// 1. React Kivhabe JavaScript a bebohar kora jay. From Line (2-72)
// const { createStore } = require("redux");
// const RESET = "RESET";
// const INCREMENT = "INCREMENT";
// const INCREMENT_BY = "INCREMENT_BY";
// const DECREMENT = "DECREMENT";

// state
// const initialState = {
//   count: 0,
// };

//action
// const incrementCounter = () => {
//   return { type: INCREMENT };
// };

// const incrementByCounter = (value) => {
//   return {
//     type: INCREMENT_BY,
//     payload: value,
//   };
// };

// const decrementCounter = () => {
//   return { type: DECREMENT };
// };

// const resetCounter = () => {
//   return { type: RESET };
// };

// // create Reducer
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case INCREMENT_BY:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case RESET:
//       return {
//         ...state,
//         count: 0,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(incrementByCounter(5));
// store.dispatch(resetCounter());
// Reducer

// 2. Payload - (Page 75-125)
// const { createStore } = require("redux");

// const GET_PRODUCTS = "GETPRODUCTS";
// const ADD_PRODUCT = "ADD_PRODUCTS";

// const initialProducts = {
//   products: ["sugar", "salt"],
//   numberOfProducts: 2,
// };

// // action
// const getProductAction = () => {
//   return {
//     type: GET_PRODUCTS,
//   };
// };

// const addProductAction = (product) => {
//   return {
//     type: ADD_PRODUCT,
//     payload: product,
//   };
// };

// reducer
// const productReducer = (state = initialProducts, action) => {
//   switch (action.type) {
//     case GET_PRODUCTS:
//       return {
//         ...state,
//       };
//     case ADD_PRODUCT:
//       return {
//         products: [...state.products, action.payload],
//         numberOfProducts: state.numberOfProducts + 1,
//       };
//     default:
//       return state;
//   }
// };

// store
// const store = createStore(productReducer);
// store.subscribe(() => {
//   console.log("store.getState()", store.getState());
// });

// store.dispatch(getProductAction());
// store.dispatch(addProductAction("apper"));
// store.dispatch(addProductAction("lime"));

// 3. Multiple reducers & combine multiple reducers (127-230)
// const { createStore, combineReducers, applyMiddleware } = require("redux");
// const { default: logger } = require("redux-logger");
// product constants
// const GET_PRODUCTS = "GET_PRODUCTS";
// const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart constants
// const GET_CART_ITEM = "GET_CART_ITEM";
// const ADD_CART_ITEM = "ADD_CART_ITEM";

// product states
// const initialProducts = {
//   products: ["sugar", "salt"],
//   numberOfProducts: 2,
// };

// cart state
// const initialCarts = {
//   products: ["sugar"],
//   numberOfProducts: 1,
// };

// product actions
// const getProductAction = () => {
//   return {
//     type: GET_PRODUCTS,
//   };
// };

// const addProductAction = (product) => {
//   return {
//     type: ADD_CART_ITEM,
//     payload: product,
//   };
// };

// const getCartAction = () => {
//   return {
//     type: GET_PRODUCTS,
//   };
// };

// const addCartAction = (product) => {
//   return {
//     type: ADD_CART_ITEM,
//     payload: product,
//   };
// };

// Reducer
// const productReducer = (state = initialProducts, action) => {
//   switch (action.type) {
//     case GET_PRODUCTS:
//       return {
//         ...state,
//       };

//     case ADD_PRODUCTS: {
//       return {
//         products: [...state.products, action.payload],
//         numberOfProducts: state.numberOfProducts + 1,
//       };
//     }

//     default:
//       return state;
//   }
// };

// const cartReducer = (state = initialCarts, action) => {
//   switch (action.type) {
//     case GET_CART_ITEM:
//       return {
//         ...state,
//       };

//     case ADD_CART_ITEM: {
//       return {
//         products: [...state.products, action.payload],
//         numberOfProducts: state.numberOfProducts + 1,
//       };
//     }

//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   productR: productReducer,
//   cartR: cartReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(logger));
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(getProductAction());
// store.dispatch(addProductAction("pay"));
// store.dispatch(getCartAction());
// store.dispatch(addCartAction("DR"));
// store.dispatch(addCartAction("Pr"));

// async actions - API Calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
// axios api
const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const reduxThunk = require("redux-thunk"); // Ensure correct import

console.log("reduxThunk:", reduxThunk); // Debug middleware

// Action types
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// Initial state
const initialTodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

// Action creators
const getTodosRequest = () => ({ type: GET_TODOS_REQUEST });
const getTodoSuccess = (todos) => ({ type: GET_TODOS_SUCCESS, payload: todos });
const getTodoFailed = (error) => ({ type: GET_TODOS_FAILED, payload: error });

// Reducer
const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload, isLoading: false };
    case GET_TODOS_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// Async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(TODOS_URL)
      .then((res) => {
        const todos = res.data.map((todo) => todo.title);
        dispatch(getTodoSuccess(todos));
      })
      .catch((err) => {
        dispatch(getTodoFailed(err.message));
      });
  };
};

// Create store
const store = createStore(todoReducer, applyMiddleware(reduxThunk)); // Ensure reduxThunk is passed correctly

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

store.dispatch(fetchData());
