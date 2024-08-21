# React Redux

1. Redux is a predictable state container for JavaScript apps.
2. It is for JavaScript apps.
3. It is a state container.
4. It is predictable.
5. Redux is not tied to React.
6. Can be used with React, Angular, Vue or even vanila javascript.
7. Redux is a library for Javascript Application.

**Redux is a state container** : Redux stores the state of your Application.

1. React Context - Prevents Prop Drilling
2. useContext + useReducer? 
3. Redux 1.0 - August 2015

## React-Redux

1. React-Redux is the official Redux UI binding library for React

2. React<----->React-Redux<----->Redux

## Three Core Concepts 
![image](https://github.com/user-attachments/assets/d529c284-1ee7-4b88-beff-666ad10e9589)

# Three Principal

First : The state of your whole application is stored in an object tree within a single store
Maintain our application state in a single object which would be managed by the redux store

Cake Shop :

Assume we are tracking the number of cakes on the shelf

{
numberOfCakes:10
}

Second :
The only way to change the state is to emit an action,an object describing what happend.

To update the state of your app, you need to let redux know about that what an action not allowed to directly update the state object

Cake Shop :

Let the shopkeeper know about our action - BUY_CAKE

Three : To Specify how the state tree is transformed by actions, you wirte pure reducers.

Reducer - (previousState,action) => newState

cake Shop :

Reducer is the shopkeeper

```js
const reducer = (state, action) => {
  switch ((action, type)) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
  }
};
```

![image](https://github.com/user-attachments/assets/784676ac-8026-4294-b186-a06d71be65da)

### Actions

1. The only way your application can interact with the store.
2. Carry some information from your app to the redux store.
3. Plain Javascript object.
4. Have a 'type' property that indicates the type of action being performed.
5. The 'type' property is typically defined as string constants.


### Reducers
1. Spefify how the app's state changes in the response to actions sent to the store
2. Function that accepts state and action as arguments, and returns the next state of the application
3. (previousState,action) => newState

### Store

1. One store for the entire application
2. Responsibilities -
    - Holds application state
    - Allows access to  state via getState()
    - Allows state to be updated via dispatch(action)
    - Registers listeners via subscribe(listener)
    - Handles unregistering of listeners via the function returned by subscribe(listener)

## Cakes and Ice Creams!

Cake Shop
- Cakes stored on the shelf
- Shopkeeper to handle BUY_CAKE from customers
  
Sell ice Creams!
- Ice Creams stored in the freeser
- New Shopkeeper to handle BUY_ICECREAM from customer
  

## Middleware
Code
## Async Actions
Code




npm i redux react-redux
