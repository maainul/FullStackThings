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

